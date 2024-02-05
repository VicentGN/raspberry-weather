const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { weatherService } = require('../services');
const { v4: uuidv4 } = require('uuid')


const getLastWeatherRegistry = catchAsync(async (req, res) => {
  const weatherRegistry = await weatherService.getCurrentWeather(req.body);
  if (!weatherRegistry) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR)
  }
  res.send(weatherRegistry);
})

const getAllWeatherRegistries = catchAsync(async (req, res) => {
  const weatherRegistries = await weatherService.getAllWeather();
  if (!weatherRegistries) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR)
  }
  res.send(weatherRegistries);
})

const sendWeatherRegistry = catchAsync(async (req, res) => {
  const { temperature, humidity, air_pressure, created_at } = req.body
  data = { uuid: uuidv4(), temperature: temperature, humidity: humidity, air_pressure: air_pressure, created_at: created_at }
  const weatherRegistry = await weatherService.sendWeather(data);
  if (!weatherRegistry) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR)
  }
  res.send('OK!');
})


module.exports = {
  getLastWeatherRegistry,
  getAllWeatherRegistries,
  sendWeatherRegistry
};
