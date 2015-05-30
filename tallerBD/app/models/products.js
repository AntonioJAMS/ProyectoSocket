module.exports = function (sequelize, DataTypes) {

    var Product = sequelize.define('Products', {
            
            ProductID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            ProductName: DataTypes.STRING,
            SupplierID: DataTypes.INTEGER,
            CategoryID: DataTypes.INTEGER,
            QuantityPerUnit: DataTypes.STRING,
            UnitPrice: DataTypes.FLOAT,
            UnitsInStock: DataTypes.INTEGER,
            UnitsOnOrder: DataTypes.INTEGER,
            ReorderLevel: DataTypes.INTEGER,
            Discontinued: DataTypes.STRING
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
  return Product;
};