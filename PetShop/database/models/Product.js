module.exports = (sequelize,dataTypes) => {
    let alias = "Productos";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name: {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        marca: {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        categoria: {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        price : {
            type : dataTypes.DECIMAL(5, 2).UNSIGNED,
            allowNull : false
        },
        description : {
            type : dataTypes.STRING(300),
            allowNull : false
        },
        image : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        discount : {
            type: dataTypes.INTEGER(11),
            allowNull : false
        },
        id_subcategoria : {
            type : dataTypes.INTEGER(11)
        },
        id_tienda : {
            type : dataTypes.INTEGER(11)
        },
        peso: {
            type: dataTypes.INTEGER,
            allowNull : false
        }
    }

    let config = {
        tableName : "products",
        timestamps : true,
        underscored : true
    }

    const Product = sequelize.define(alias,cols,config);
    Product.associate = function(models){
        Product.belongsTo(models.Subcategorias,{
            as : 'subcategoria',
            foreignKey : 'id_subcategoria'
        })
    }
    return Product;
}