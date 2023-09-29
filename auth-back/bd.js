require("dotenv").config();

const {HOST,USER,PASSWORD,BDNAME,PORT}=process.env;
const {Sequelize} = require ("sequelize");
const UsersSchema = require ("./src/models/User.js");
const TodoSchema = require ("./src/models/Todo.js");
const TokenSchema = require ("./src/models/Token.js");


const DataBase =new Sequelize (
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDNAME}`,{logging:false} 
    );                                                     //loggin permite que no me ensucie el postgres 

    UsersSchema(DataBase);
    TodoSchema(DataBase);
    TokenSchema(DataBase);

const {UserSchema}= DataBase.models;




module.exports = {DataBase,
    ...DataBase.models,

}; 