const { DataTypes}= require ("sequelize")

module.exports = (DataBase) => {
    
DataBase.define("UserSchema",{
    id:{type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    username:{
        type:DataTypes.STRING,
        require:true,
        unique:true,
   },
    password:{ type:DataTypes.STRING,require:true
        },
    name:{ type:DataTypes.STRING, require:true
    }, 
   });
};
