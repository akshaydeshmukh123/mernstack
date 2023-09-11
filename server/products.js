const { ExchangedataModel } =require("./models/ExchangeData");

const { IcondataModel } =require("./models/Icondata");
require("dotenv").config();

const axios = require("axios");


//fetch and InsertData in Database

const IconData = async () => {

    try {

        const response = await axios.get(
          "https://rest.coinapi.io/v1/exchanges/icons/32",
          {
            headers: {
              "X-CoinAPI-Key":process.env.key,
            },
          }
        );

        const Data = response.data;
        console.log(Data)

        IcondataModel.deleteMany({});
        const storedata = await IcondataModel.insertMany(Data);
        console.log(storedata);
        

        
        
    } catch (error) {
        console.log(error)
    }
    
}

//fetch and InsertData in Database

const ExchangeData = async () => {
  try {
    const response = await axios.get("https://rest.coinapi.io/v1/exchanges", {
      headers: {
        "X-CoinAPI-Key": process.env.key,
      },
    });

    const Data = response.data;
    console.log(Data);

    ExchangedataModel.deleteMany({});
    const storedata = await ExchangedataModel.insertMany(Data);
    console.log(storedata);
  } catch (error) {
    console.log(error);
  }
};


module.exports = { IconData,ExchangeData }



