export const SET_BOOK = 'SET_BOOK';
export const SET_MOVIE ='SET_MOVIE';
export const SET_CHARACTER ='SET_CHARACTER';
export const SET_MOVIE_QOUTES ='SET_MOVIE_Quote';
export const SET_MOVIE_FILTERS='SET_MOVIE_FILTERS';
export const SET_CHARACTER_FILTERS = 'SET_CHARACTER_FILTERS';

export const setBook = (payload) => ({type : SET_BOOK,payload});
export const setMovie = (payload) => ({type:SET_MOVIE,payload});
export const setCharacter =(payload) => ({type:SET_CHARACTER,payload})
export const setMovieQuotes = (payload) =>({type:SET_MOVIE_QOUTES,payload})
export const setMovieFilters = (payload) =>({type:SET_MOVIE_FILTERS,payload})
export const setCharacterFilters = (payload) => ({ type: SET_CHARACTER_FILTERS, payload });