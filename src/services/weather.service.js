const httpStatus = require('http-status');
const { Weather } = require('../models');
const ApiError = require('../utils/ApiError');


const getCurrentWeather = async () => {
  return Weather.findOne().sort({ _id: -1 });
}

const getAllWeather = async () => {
  return Weather.find({});
}

const sendWeather = async (data) => {
  const weather = new Weather({
    id: data.uuid,
    temperature: data.temperature,
    humidity: data.humidity,
    air_pressure: data.air_pressure,
    created_at: data.created_at
  })

  return await weather.save();

}


module.exports = {
  getCurrentWeather,
  getAllWeather,
  sendWeather
};
