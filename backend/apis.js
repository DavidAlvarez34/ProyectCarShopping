const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports.getPoductsApi=async()=>{
    let result = await axios.get(process.env.computacionML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}
module.exports.startComponentsPC=async()=>{
    let result = await axios.get(process.env.computacionML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}

module.exports.startLaptops=async()=>{
    let result = await axios.get(process.env.laptopsML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}

module.exports.startDisplay=async()=>{
    let result = await axios.get(process.env.monitoresML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}

module.exports.startPc=async()=>{
    let result = await axios.get(process.env.computadorasML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}

module.exports.startPeripherals=async()=>{
    let result = await axios.get(process.env.perifericosML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}