import axios from "axios";
import { setCharacter } from "../actions";

const oneapi = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});
oneapi.defaults.headers.common['Authorization'] = 'Bearer 73ssf7zyX6rtSy8koY1u'

export const requestCharacter = () => async (dispatch) => {
  try {
    const response = await oneapi.get('/character');
    dispatch(setCharacter(response.data.docs))
  }
  catch (err) {
    console.log(err);
  }
}
