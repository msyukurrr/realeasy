const axios = require("axios");
export const baseURL = 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential'

const options = {
  method: 'GET',
  url: 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential',
  params: {
    LatitudeMax: '81.14747595814636',
    LatitudeMin: '-22.26872153207163',
    LongitudeMax: '-10.267941690981388',
    LongitudeMin: '-136.83037765324116',
    CurrentPage: '1',
    RecordsPerPage: '10',
    SortOrder: 'A',
    SortBy: '1',
    CultureId: '1',
    NumberOfDays: '0',
    BedRange: '0-0',
    BathRange: '0-0',
    RentMin: '0'
  },
  headers: {
    'X-RapidAPI-Key': '30459a32bdmsh93cc18386cfa39ap1de118jsn0077ac10a5c7',
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
  }
};

var apiKey = "30459a32bdmsh93cc18386cfa39ap1de118jsn0077ac10a5c7"
const url = `https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=81.14747595814636&LatitudeMin=-22.26872153207163&LongitudeMax=-10.267941690981388&LongitudeMin=-136.83037765324116&Keywords=${location}`


export const searchLocation = (event) => {
  if(event.key === "Enter") {
    axios.get(url)
    .then((response) => {
      console.clear();
      setData(response.data);
      console.log(response.data);
      setWeather(response.data.weather);
      setErrorMessage("");
    }).catch(err => {
      console.log(err);
      setErrorMessage("Please enter another location");
      setData({});
      setWeather()
    })
    setLocation('')
}}

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });