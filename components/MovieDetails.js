import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import star from "../assets/star.png";

const MovieDetails = () => {

    const details = useSelector(state => state.details);

    return (
        <View style={styles.container} >
            {
                Object.keys(details).length ? 
                <View style={styles.info} >
                    <Text style={styles.title} >{details.Title}</Text>
                    <Image source={details.Poster} style={styles.img} />
                    <View style={styles.tcont} >
                        <Text style={styles.textS} >Resume:</Text>
                        <Text style={styles.text} >{details.Plot}</Text>
                        <Text style={styles.textS} >Actors:</Text>
                        <Text style={styles.text} >{details.Actors}</Text>
                        <Text style={styles.textS} >Year:</Text>
                        <Text style={styles.text} >{details.Year}</Text>
                        <Text style={styles.textS} >Rating:</Text>
                        <View style={styles.rating} >
                            <Image source={star} style={styles.star} />
                            <Text style={styles.text} >{details.imdbRating}</Text>
                        </View>
                    </View>
                </View> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: "center",
    },

    info: {
        // flex: 1,
        paddingHorizontal: 15
    },

    title: {
        fontSize: "xx-large",
        fontWeight: "bold",
        color: "#fff"
    },

    img: {
        flex: 1,
        // width: 700,
        // height: 600,
        width: 400,
        height: 600,
        resizeMode: "contain",
        alignSelf: "center"
    },

    tcont: {
        backgroundColor: "#fff",
        borderRadius: "30px"
    },

    text: {
        fontSize: "larger",
    },

    textS: {
        fontSize: "larger",
        fontWeight: "bold",
    },

    rating: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 2,
    },

    star: {
        width: 20,
        height: 20,
    }
});

export default MovieDetails