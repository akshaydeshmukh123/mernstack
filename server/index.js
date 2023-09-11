
const express = require("express");
require("dotenv").config();;

const cors = require("cors");

const {IconData,ExchangeData}=require("./products")


const { connection } = require("./config/db");

const {router}=require("./routes/router")

const app = express();

app.use(express.json());
app.use(cors())


app.use(router)


app.listen(process.env.port, async () => {
    
    try {

        await connection
        
        console.log(`conneted to the database`)

    } catch (error) {
        console.log(error.message)
        
    }

    console.log(`server is live at port ${process.env.port}`)
    
})

IconData();
ExchangeData()