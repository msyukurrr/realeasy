import axios from 'axios';

const baseUrl = 'https://realty-mole-property-api.p.rapidapi.com/properties'


export const fetchApi = async (url) => {
    const response = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ed34dd816cmsh8ea61bffd2a6260p1fbf54jsnc979e2a46e7c',
            'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
        }
    })
}