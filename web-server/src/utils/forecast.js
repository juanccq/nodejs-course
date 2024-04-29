const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=74e8589b476cdb3ac89b554bb34ab219&query='+ latitude +',' + longitude;

    request({ url, json:true }, (error, {body}) => {
        if( error ) {
            callback('Unable to connect to weather service', undefined);
        }
        else if( body.error ) {
            callback('Unable to find location', undefined);
        }
        else {
            callback(undefined, 
                 'The weather is '+body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out.'
            );
        }
    })
}

module.exports = forecast;