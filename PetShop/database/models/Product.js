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
        id_categoria : {
            type : dataTypes.INTEGER(11)
        },
        id_tienda : {
            type : dataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName : "products",
        timestamps : true,
        underscored : true
    }

    const Product = sequelize.define(alias,cols,config);

    return Product;
}