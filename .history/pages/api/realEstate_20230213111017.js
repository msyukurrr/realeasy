const axios = require("axios");
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://realty-mole-property-api.p.rapidapi.com/saleListings',
  params: {city: 'Vancouver', limit: '10'},
  headers: {
    'X-RapidAPI-Key': 'ed34dd816cmsh8ea61bffd2a6260p1fbf54jsnc979e2a46e7c',
    'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});