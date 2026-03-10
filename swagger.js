const defaults = require('nodemon/lib/config/defaults');

const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Temple API',
        description: 'CSE 341 Temple API Documentation', 
    },
    host: 'localhost:8080',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Successfully generated swagger.json');
});