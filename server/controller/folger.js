const axios = require('axios');

const fetchingFolger = async(url) => {
    try{
        const {data} = await axios.get(url);
        return data;
    }catch (error) {
        console.log('Bad news bears with folgers get request...', error);
    }
}

module.exports = fetchingFolger;