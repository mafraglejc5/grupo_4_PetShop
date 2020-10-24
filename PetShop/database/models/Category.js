module.exports = (sequelize,dataTypes) => {
    let alias = "Subcategorias";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
    }

    let config = {
        tableName: "subcategories",
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config);
    Category.associate = function(models){
        Category.hasMany(models.Productos,{
            as : 'productos',
            foreignKey : 'id_subcategoria'
        })
    }
    return Category

}