const { DataTypes}= require ("sequelize")

module.exports = (DataBase) => {
    
DataBase.define("TokenSchema",{
    id:{type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    token:{
        type:DataTypes.STRING,
        require:true,
    },
   });
};
