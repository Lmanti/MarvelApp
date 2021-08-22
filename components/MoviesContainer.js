import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import GestureRecognizer from 'react-native-swipe-gestures';
import { getMoviesPaginated } from '../actions';

const MoviesContainer = () => {

    const dispatch = useDispatch();

    const movies = useSelector(state => state.movies.Search);
    const lastSearch = useSelector(state => state.movies.title);
    const [currentPage, setCurrentPage] = useState(2)

    const swipeLeftHandler = () => {
        if (movies.length === 10) {
            setCurrentPage(currentPage + 1)
            dispatch(getMoviesPaginated(lastSearch, currentPage))
        }
    }

    const swipeRightHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            dispatch(getMoviesPaginated(lastSearch, currentPage))
        }
    }

    return (
        <GestureRecognizer style={styles.container} onSwipeLeft={swipeLeftHandler} onSwipeRight={swipeRightHandler} >
            {
                movies && movies.map(n => <MovieCard
                    key={n.imdbID}
                    img={n.Poster}
                    name={n.Title}
                    id={n.imdbID}
                />)
            }
        </GestureRecognizer>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MoviesContainer;