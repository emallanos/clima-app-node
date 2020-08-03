const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//New York: 40.750000, -74.000000
//Japom: 35, 139
const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima( coords.lat, coords.lng );
    return `El clima de ${coords.dir} es de ${temp}°C`;  
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);
