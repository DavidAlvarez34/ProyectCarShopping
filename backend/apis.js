const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports.getPoductsApi=async()=>{
    let result = await axios.get(process.env.COMPUTACION_ML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}
module.exports.startComponentsPC=async()=>{
    let result = await axios.get(process.env.COMPONENTES_ML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}

module.exports.startLaptops=async()=>{
    let result = await axios.get(process.env.LAPTOPS_ML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}

module.exports.startDisplay=async()=>{
    let result = await axios.get(process.env.MONITORES_ML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}

module.exports.startPc=async()=>{
    let result = await axios.get(process.env.COMPUTADORAS_ML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}

module.exports.startPeripherals=async()=>{
    let result = await axios.get(process.env.PERIFERICOS_ML);
    let getJson = result.data;
    //console.log(getJson);
    return getJson;
}