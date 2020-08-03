const axios = require('axios');

const getClima = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=88955bd2adeb65c844f685c6e7ad1bbe&units=metric`);
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}