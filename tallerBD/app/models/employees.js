module.exports = function (sequelize, DataTypes) {

    var Employee = sequelize.define('Employees', {
            
            EmployeeID:{
                primaryKey:true,
                type: DataTypes.INTEGER
            },
            LastName: DataTypes.STRING,
            FirstName: DataTypes.STRING,
            Title: DataTypes.STRING,
            TitleOfCourtesy: DataTypes.STRING,
            BirthDate: DataTypes.DATE,
            HireDate: DataTypes.DATE,
            Address: DataTypes.STRING,
            City: DataTypes.STRING,
            Region: DataTypes.STRING,
            PostalCode: DataTypes.STRING,
            Country: DataTypes.STRING,
            HomePhone: DataTypes.STRING,
            Extension: DataTypes.STRING,
            ReportsTo: DataTypes.INTEGER,
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
  return Employee;
};