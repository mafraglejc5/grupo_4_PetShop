const path = require('path');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const fs = require('fs');

module.exports = {    
    agregar:function(req,res){    
        res.render('productAdd',{
            title: "Admin - Carga de Productos",
            css:"productAdd.css",
            productos:dbProducts
        })
    },
     publicar:function(req,res){
       let lastID = 1;
       dbProducts.forEach(producto=>{
           if(producto.id > lastID){
               lastID = producto.id
           }
       })
       let newProduct = {
           id:lastID +1,
           name: req.body.name.trim(),
           marca: (req.body.marca),
           price: Number(req.body.price),
           description:req.body.description.trim(),
           discount:Number(req.body.discount),
           image: "default-image.png"
       }
       dbProducts.push(newProduct);
       fs.writeFileSync(path.join(__dirname,"..","data","dbProducts.json"),JSON.stringify(dbProducts),'utf-8')
       res.redirect('/products')
    }
}