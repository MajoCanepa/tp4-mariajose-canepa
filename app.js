const express = require("express")
require('dotenv').config()
const helmet = require('helmet')
const cors = require ('cors')
const morgan = require ('morgan')
const port = process.env.port


const app = express()

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/',require('./routes/app.routes'))


app.listen(port||3000, ()=> {
    console.log("Servidor esta corriendo en el puerto", port)
})