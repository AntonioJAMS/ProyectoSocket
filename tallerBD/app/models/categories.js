module.exports = function (sequelize, DataTypes) {

    var Categorie = sequelize.define('Categories', {
            
            CategoryID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            CategoryName: DataTypes.STRING,
            Description: DataTypes.STRING
        },
        {
            timestamps: false
        },
        {
            classMethods: {
                associate: function (models) {
                // example on how to add relations
                // Article.hasMany(models.Comments);
                } 
            }
        }
    );
  return Categorie;
};