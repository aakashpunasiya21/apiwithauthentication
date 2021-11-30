import axios from "axios";
import { setMovie } from "../actions";

const oneapi= axios.create({
    baseURL : 'https://the-one-api.dev/v2',
});
oneapi.defaults.headers.common['Authorization'] = 'Bearer 73ssf7zyX6rtSy8koY1u'

export const requestMovie = () =>async (dispatch) =>{
    try{
        const responsemovie = await oneapi.get('/movie');
        dispatch(setMovie(responsemovie.data.docs))
    }
    catch(err){
        console.log(err)
    }
}