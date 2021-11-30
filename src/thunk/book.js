import axios from "axios";
import { setBook, setMovie } from "../actions";

const oneapi= axios.create({
    baseURL : 'https://the-one-api.dev/v2',
});
oneapi.defaults.headers.common['Authorization'] = 'Bearer 73ssf7zyX6rtSy8koY1u'

export const requestBooks = () =>async (dispatch) =>{
    try{
        const response = await oneapi.get('/book');
        dispatch(setBook(response.data.docs))
    }
    catch(err){
        console.log(err);
    }
}

