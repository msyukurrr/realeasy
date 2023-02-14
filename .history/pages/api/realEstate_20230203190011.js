import axios from "axios";


export const baseUrl = 'https://realty-in-ca1.p.rapidapi.com'

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
  }
 
};

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers:{
      'X-RapidAPI-Key': '30459a32bdmsh93cc18386cfa39ap1de118jsn0077ac10a5c7',
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
    }
  })
  return data;
}

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});