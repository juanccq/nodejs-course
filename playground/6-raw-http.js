const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=74e8589b476cdb3ac89b554bb34ab219&query=-16,-68';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();