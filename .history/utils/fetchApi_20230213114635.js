import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const response = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ed34dd816cmsh8ea61bffd2a6260p1fbf54jsnc979e2a46e7c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
}