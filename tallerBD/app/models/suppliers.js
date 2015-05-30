module.exports = function (sequelize, DataTypes) {

    var Supplier = sequelize.define('Suppliers', {
            
            SupplierID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            CompanyName: DataTypes.STRING,
            ContactName: DataTypes.STRING,
            ContactTitle: DataTypes.STRING,
            Address: DataTypes.STRING,
            City: DataTypes.STRING,
            Region: DataTypes.STRING,
            PostalCode: DataTypes.STRING,
            Country: DataTypes.STRING,
            Phone: DataTypes.STRING,
            Fax: DataTypes.STRING,
            HomePage: DataTypes.STRING,
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
  return Supplier;
};