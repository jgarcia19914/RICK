
const { jsonResponse } = require("../lib/jsonResponse");
const User = require("../src/models/User");
const router = require("express").Router();
const Singupcontroller = require ("../src/controllers/Singupcontroller")
const Usuariocreado = require ("../src/controllers/Usuariocreado")


router.post("/", async (req, res) => {
    try {
        const {username,name,password} = req.body;
           
         if(!username || !name || !password){
         return res.status(409).json
         (jsonResponse (409, {error:"Campos requeridos vacios",}))
        }
        const newuser = await Singupcontroller({username, name, password})
        res.status(200)
        .json(jsonResponse (200, {menssage: "Usuario creado"}));
        
    } catch (error) {
        console.error("Error en la ruta POST:", error);
        return res.status(500).json(
            jsonResponse(500, { error: "Username duplicado" }))
        }
   
});
    
module.exports = router;