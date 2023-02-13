const axios = require("axios");
import axios from 'axios';

const instance = axios.create({
  baseURL: "https://realty-mole-property-api.p.rapidapi.com/saleListings",
  headers: {
    'X-RapidAPI-Key': 'ed34dd816cmsh8ea61bffd2a6260p1fbf54jsnc979e2a46e7c',
    'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
  }
})

export default {
  getData: () =>
 instance ({
  'method': 'GET',
  'url':'/query',
  'params': {
    'city': 'Vancouver',
     'limit': '10'}
  
 }),
 postData: () =>
 instance ({
  'method': 'POST',
  'url':'/api',
  'data': {
    'item1':'data1',
    'item2':'item2'
  },
  'headers': {
    'content-type':'application/json'
  }
 })
}


