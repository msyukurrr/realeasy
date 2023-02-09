import Head from 'next/head'

import axios from 'axios'


export default function RealEstate() {
 
 const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://realty-in-ca1.p.rapidapi.com/locations/auto-complete',
  params: {Area: 'langley', CultureId: '1'},
  headers: {
    'X-RapidAPI-Key': '30459a32bdmsh93cc18386cfa39ap1de118jsn0077ac10a5c7',
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



  return (
    <>



    </>
  )
}
