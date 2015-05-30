module.exports = function (sequelize, DataTypes) {

    var Region = sequelize.define('Regions', {
            
            RegionID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            RegionDescription: DataTypes.STRING
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
  return Region;
};