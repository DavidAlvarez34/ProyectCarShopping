const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const getArticleML = async(opc) => {
    let url;
    switch (opc) {
        case "Inicio":
            url = process.env.computacionML;
            break;
        default:
            break;
    }

    console.log('Inicio axios',url);
    return (await axios.get(url)
        .then(response => response = response.data)
        .catch(function(error){
            console.log(error);
        })
    );
};

module.exports = {getArticleML};