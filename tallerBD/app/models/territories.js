module.exports = function (sequelize, DataTypes) {

    var Territorie = sequelize.define('Territories', {
            
            TerritoryID:{
                primaryKey:true,
                type: DataTypes.STRING
            },
            TerritoryDescription: DataTypes.STRING,
            RegionID: DataTypes.INTEGER
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
  return Territorie;
};