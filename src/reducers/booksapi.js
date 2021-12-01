import { SET_BOOK, SET_CHARACTER, SET_MOVIE, SET_MOVIE_FILTERS, SET_MOVIE_QOUTES } from "../actions";
const initialState = {
  book: [],
  movie:{ 
    movie:[],
  filter:{limit:100}},
  character : [],
  quotes:[]
}
export default function booksapi(state = initialState, action) {
  switch (action.type) {
    case SET_BOOK:
      return {
        ...state,
        book: action.payload
      }
    case SET_MOVIE:
      return{
        ...state,
        movie:{
          ...state.movie,
          ...action.payload
      }
    }
    case SET_MOVIE_FILTERS:
      return{
        ...state,
        movie:{
          ...state.movie,
          filter :{
            ...state.movie.filter,
            ...action.payload,
          }

        }
      }
    case SET_CHARACTER:
      return{
        ...state,
        character:action.payload
      }
      case SET_MOVIE_QOUTES:return{
        ...state,
        quotes:action.payload
      }
    default:
      return state
  }
}