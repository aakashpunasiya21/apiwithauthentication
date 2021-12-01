import axios from "axios";
import { setMovie } from "../actions";

const oneapi = axios.create({
	baseURL: 'https://the-one-api.dev/v2',
});
oneapi.defaults.headers.common['Authorization'] = 'Bearer 73ssf7zyX6rtSy8koY1u'

export const requestMovie = (filter) => async (dispatch) => {
	try {
		const params = {
			budgetInMillions: filter.limit,
		};
		console.log("params", params.budgetInMillions)
		const { data: { docs } } = await oneapi.get(`/movie?budgetInMillions<${params.budgetInMillions}`);
		dispatch(setMovie({ movie: docs }))
	}
	catch (err) {
		console.log(err)
	}
}