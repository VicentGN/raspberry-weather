const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const weatherSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            trim: true,
        },
        temperature: {
            type: Number,
            required: true
        },
        humidity: {
            type: Number,
            required: true
        },
        air_pressure: {
            type: Number,
            required: true
        },
        created_at: {
            type: String,
            required: true
        }
    }
);

// add plugin that converts mongoose to json
weatherSchema.plugin(toJSON);



/**
 * @typedef Weather
 */
const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
