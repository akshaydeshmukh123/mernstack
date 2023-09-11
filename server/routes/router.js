const express = require('express');

const router = express.Router();

const { ExchangedataModel } = require("../models/ExchangeData");

const { IcondataModel } = require("../models/Icondata");


//home routes

router.get("/", async (req, res) => {
  try {
    res.status(201).json({ message: "API CRAETED" });
  } catch (error) {
    console.log(error.message);
  }
});


//get Exchanges Data

router.get("/exchanges", async(req, res) => {
    try {
        const products = await ExchangedataModel.find();

        res.status(201).json(products)
    } catch (error) {
        console.log(error.message)
    }
})

///get icon data

router.get("/exchanges/icon", async (req, res) => {
    
    try {

        const products = await IcondataModel.find();

        res.status(201).json(products)
        
    } catch (error) {
        
        console.log(error.message)
    }
    
})


module.exports={router}