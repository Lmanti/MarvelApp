import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getMovieDetail } from '../actions';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';

const MovieCard = ({img, id}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const goToDetails = () => {
        dispatch(getMovieDetail(id));
        navigation.navigate("Details");
    }

    return (
        <TouchableOpacity style={styles.card} onPress={goToDetails} >
            <Image source={img} style={styles.img} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    img: {
        flex: 1,
        // width: 700,
        // height: 600,
        width: 400,
        height: 600,
        // resizeMode: "contain"
    },

    card: {
        marginTop: 30,
    }
});

export default MovieCard;