//guardo la base de datos en "db", para empezar a manipularlo.
const db = require ('../database/models');
//variables para usar las funciones de comparacion en la base de datos
const { Sequelize } = require('../database/models');
const Op = Sequelize.Op;
const { validationResult } = require('express-validator');

//pruebas despues se sacan *<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'))
const dbUsers = require(path.join(__dirname,'..','data', 'dbUsers'));
module.exports = {
    /*MUESTA LISTA DE PRODUCTOS DE LA BASE DE DATOS*/
    listar:function(req,res){
        //recorro la base de datos "productos, y envio todos los productos a su ruta"
        db.Productos.findAll()
            .then(producto =>{
                res.render('products',{
                 title: 'Productos',
                 css: 'index.css',
                 productos: producto
                })
            })
            .catch(error =>{
                res.send(error)
            })
    },
    /*MUESTRO EL DETALLE DEL PRODUCTO*/
    detalle:function(req,res){
        //busco en la base de datos el id del producto seleccionado.
        db.Productos.findByPk(req.params.id)
            .then(producto =>{
                res.render("productDetail",{
                    title: "Detalle del producto",
                    css: "products.css",
                    producto: producto
                })
            })
            .catch(error =>{
                res.send(error)
            })
    },
    /*FUNCION PARA EL BUSCADOR DEL PRODUCTO TIPEADO*/
    search:function(req,res){
        //guardo lo que ingresa en el buscador
        let busqueda = req.query.search;
        db.Productos.findAll({
            where: {
                //busco esa palabra/letra en nombre de la tabla productos
                name: {[Op.like]: `%${busqueda}%`}
            }
        })
        //devuelvo el array con el resultado de la busqueda.
        .then(productos =>{
            res.render('products',{
                title: 'Resultado de la busqueda',
                css: 'index.css',
                productos: productos
            })
        })
        .catch(error =>{
            res.send(error)
        })
    },
    /*AGREGO PRODUCTO*/
    agregar:function(req,res){
        //guardo los nombres en subCategorias para despues mostrarlos y ordenar el nombre alfabeticamente.
        let subCategorias = db.Subcategorias.findAll({
            order: [
                ['name','ASC']
            ]
        })
        .then(subCategorias =>{
            res.render('productAdd',{
                title:"Cargar producto",
                css: "products.css",
                subCategorias: subCategorias
            })
        })
    },
    /*PUBLICO EL PRODUCTO*/
    publicar:function(req,res){
        //valido si hay errores
        let errors = validationResult(req);
        //si no hay errores, entra y crea el nuevo producto
        if(errors.isEmpty()){
            db.Productos.create({
                name: req.body.name,
                marca: req.body.marca,
                categoria: req.body.categoria,
                peso: req.body.peso,
                price: req.body.price,
                description:req.body.description,
                image: (req.files[0])?req.files[0].filename:"default.png",
                discount: req.body.discount,
                id_subcategoria: req.body.id_subcategoria
            })
            //redirecciono a productos para mostrar todos los productos, incluyendo el nuevo.
            .then(()=>{
                return res.redirect('/products')
            })
        }
    },
    /*MUESTRO DETALLE DE LOS PRODUCTOS Y LOS PUEDO EDITAR */
    show:function(req,res){
        let idProducto = req.params.id;
        
        let flap = req.params.flap;
        let activeDetail;
        let activeEdit;
        let showDetail;
        let showEdit;
        //DEPENDIENDO EL VALOR, SE MUESTRA CADA PESTAÑA
        if(flap == "show"){
            activeDetail = "active";
            showDetail = "show";
        }else{
            activeEdit = "active";
            showEdit = "show";
        }
        //GUARDO EL PRODUCTO SELECCIONADO EN producto CON SU ASSOCIACION subcategoria
        let producto = db.Productos.findOne({
            where: {
                id: idProducto
            },
            include: [
                {
                    association: 'subcategoria'
                }
            ]
        })
        //GUARDO LA CANTIDAD DE PRODUCTOS PARA PODES RECORRERLOS EN LA PESTAÑA "detalle del producto"
        let total = db.Productos.count();
        //GUARDO TODO LOS DATOS DE LA TABLA EN idCategorias
        let idCategorias = db.Subcategorias.findAll()
        //LO PASO COMO PROMESA EN UNA LLAVE A LAS VARIABLES QUE VOY A USAR
        Promise.all([producto, idCategorias, total])
        
            .then(([producto, idCategorias, total]) => {
                //MUESTRO productShow Y LE PASO CADA VALOR PARA PODER MANIPULARLO EN DICHO ARCHIVO
                res.render('productShow', {
                    title: "Ver / Editar Producto",
                    css: 'products.css',
                    total: total,
                    idCategorias: idCategorias,
                    producto: producto,
                    activeDetail: activeDetail,
                    activeEdit: activeEdit,
                    showEdit: showEdit,
                    showDetail: showDetail
                })
            })

    },
    /*EDITO EL PRODUCTO SELECCIONADO*/
    editar:function(req,res){
        //USO LA FUNCION PARA ACTUALIZAR DATOS.
        db.Productos.update({
            //GUARDO LOS DATOS NUEVOS EN CADA VARIBLE ASIGNADA.
            name: req.body.name,
            price: Number(req.body.price),
            peso: Number(req.body.peso),
            discount: Number(req.body.discount),
            categoria: req.body.categoria,
            id_subcategoria: Number(req.body.id_subcategoria),
            description: req.body.description,
            //ARREGLAR LA CARGA DE IMAGEN!!!!
            image: req.body.file
        },
        {
            //DEPENDE DE LA ID SELECCIONADA, SE EDITAR CADA PRODUCTO.
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                //REDIRECCIONO A LA LISTA DE PRODUCTOS.
                res.redirect('/products/detalle/'+req.params.id)
            })
    },
    /*ELIMINO EL PRODUCTO SELECCIONADO*/
    eliminar:function(req,res){
        //destruye el producto selecionado por id
        db.Productos.destroy({
            where:{
                id: req.params.id
            }
        })
            .then(result=>{
                res.render('/products')
            })
    }
}
