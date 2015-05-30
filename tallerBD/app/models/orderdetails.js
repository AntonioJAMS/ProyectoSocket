module.exports = function (sequelize, DataTypes) {

    var OrderDetail = sequelize.define('OrderDetails', {
            
            OrderID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            ProductID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            UnitPrice: DataTypes.FLOAT,
            Quantity: DataTypes.INTEGER,
            Discount: DataTypes.FLOAT
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
  return OrderDetail;
};