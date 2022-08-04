const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=74e8589b476cdb3ac89b554bb34ab219&query=-16.4850751,-68.1789251';

request({ url:url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})