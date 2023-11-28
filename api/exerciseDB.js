import axios from 'axios';
import { rapidApiKey } from '../constants';

const baseURL= 'https://exercisedb.p.rapidapi.com'

const apiCall = async(url,params)=>{
    try{
        const option = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }
        };

        const response = await axios.request(option);
        return response.data;
    }
    catch(err){
        console.log('error: ', err.message);
    }
}

export const fetchExercisesByBodyPart = async(bodyPart)=>{
    let data = await apiCall(baseURL+`/exercises/bodyPart/${bodyPart}`);
    return data;
}