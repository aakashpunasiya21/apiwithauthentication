import axios from "axios";
import { setMovieQuotes } from "../actions";

const oneapi= axios.create({
    baseURL : `https://the-one-api.dev/v2`,
});
oneapi.defaults.headers.common['Authorization'] = 'Bearer 73ssf7zyX6rtSy8koY1u'

export const requestQuotes = (id) =>async (dispatch) =>{
    try{
        const responsemoviequotes = await oneapi.get(`/movie${id}/quote`);
        dispatch(setMovieQuotes(responsemoviequotes.data.docs))
    }
    catch(err){
        console.log(err)
    }
    debugger;
}