const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=74e8589b476cdb3ac89b554bb34ab219&query=-16.4850751,-68.1789251';

request({ url:url }, (error, response) => {
    if( error ) {
        console.log('Unable to connect to weather service');
    }
    else if( response.body.error ) {
        console.log('Unable to find location');
    }
    else {
        const data = JSON.parse(response.body);
        console.log(data.current);    
    }
})

// Geocoding
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVhbmNjcSIsImEiOiJjazFjcTJwbnUwMDh6M21wNnVjMTYwYmN4In0.pdTykSGaN8iGuE5r1uYiTQ&limit-1';

request({ url:geoUrl, json: true }, (error, response) => {
    if( error ) {
        console.log('Unable to connect to geocoding service');
    }
    else if( response.body.features.length === 0 ) {
        console.log('Unable to find coordinates');
    }
    else {
        const lat = response.body.features[0].center[1];
        const long = response.body.features[0].center[0];

        console.log(lat, long);
    }
})