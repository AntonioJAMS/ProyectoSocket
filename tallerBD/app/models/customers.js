module.exports = function (sequelize, DataTypes) {

    var Customer = sequelize.define('Customers', {
            
            CustomerID:{
                primaryKey:true,
                type: DataTypes.STRING
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
            Fax: DataTypes.STRING
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
  return Customer;
};