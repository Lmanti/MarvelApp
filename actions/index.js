import { apikey } from "@env";
export const GET_MOVIES = "GET_MOVIES";
export const GET_DETAILS = "GET_DETAILS";

export const getMovies = title => dispatch => {
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}&type=movie`)
    .then(res => res.json())
    .then(json => {
        json.title = title;
        return dispatch({type: GET_MOVIES, payload: json})
    })
}

export const getMoviesPaginated = (title, currentPage) => dispatch => {
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}&type=movie&page=${currentPage}`)
    .then(res => res.json())
    .then(json => {
        json.title = title;
        return dispatch({type: GET_MOVIES, payload: json})
    })
}

export const getMovieDetail = id => dispatch => {
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
    .then(res => res.json())
    .then(json => dispatch({type: GET_DETAILS, payload: json}))
}