module.exports = (sequelize,dataTypes) => {
    let alias = "Vendedores";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        nombre : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        avatar : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        id_usuario : {
            type : dataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName : "Vendedores",
        timestamps : true,
        underscored : true
    }

    const Vendedor = sequelize.define(alias,cols,config);

    return Vendedor;

}