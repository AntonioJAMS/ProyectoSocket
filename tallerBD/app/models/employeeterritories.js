module.exports = function (sequelize, DataTypes) {

    var EmployeeTerritorie = sequelize.define('EmployeeTerritories', {
            
            EmployeeID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            TerritoryID: DataTypes.STRING
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
  return EmployeeTerritorie;
};