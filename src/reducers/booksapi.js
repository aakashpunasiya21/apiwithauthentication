import { SET_BOOK, SET_CHARACTER, SET_MOVIE, SET_MOVIE_QOUTES } from "../actions";
const initialState = {
  book: [],
  movie: [],
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
        movie:action.payload
      }
    case SET_CHARACTER:
      return{
        ...state,
        character:action.payload
      }
      case SET_MOVIE_QOUTES:return{
        ...state,
        quotes:action.quotes
      }
    default:
      return state
  }
}