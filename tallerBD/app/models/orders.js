module.exports = function (sequelize, DataTypes) {

    var Order = sequelize.define('Orders', {
            
            OrderID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            CustomerID: DataTypes.STRING,
            EmployeeID: DataTypes.INTEGER,
            OrderDate: DataTypes.DATE,
            RequiredDate: DataTypes.DATE,
            ShippedDate: DataTypes.DATE,
            ShipVia: DataTypes.INTEGER,
            Freight: DataTypes.FLOAT,
            ShipName: DataTypes.STRING,
            ShipAddress: DataTypes.STRING,
            ShipCity: DataTypes.STRING,
            ShipRegion: DataTypes.STRING,
            ShipPostalCode: DataTypes.STRING,
            ShipCountry: DataTypes.STRING,
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
  return Order;
};