const { DataTypes}= require ("sequelize")

module.exports = (DataBase) => {
    
DataBase.define("TodoSchema",{
    id:{type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    idUser:{
        type:DataTypes.STRING,
        require:true,
    },
    title:{
        type:DataTypes.STRING,
        require:true,
    },
    complete:{
        type:DataTypes.BOOLEAN,
        require:true,
    },
   });
};
