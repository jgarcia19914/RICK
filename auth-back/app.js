const express = require ("express")
const cors = require ("cors");
const { DataBase } = require("./bd");
const app = express()

require("dotenv").config();



app.use(cors())
app.use(express.json())

app.use("/api/signup", require("./routes/Singup"));
app.use("/api/user", require("./routes/User"));
app.use("/api/login", require("./routes/Login"));
app.use("/api/logout", require("./routes/Singout"));
app.use("/api/refresh", require("./routes/refreshToken"));
app.use("/api/todos", require("./routes/Todos"));


app.get ("/", (req, res) => {
    res.send("Hello World")
})

DataBase.sync({alter:true}).then(() => {
    app.listen("3100", () => {
    console.log(`Server is running on port`, 3100)
})
})
.catch((err)=>console.log(err));