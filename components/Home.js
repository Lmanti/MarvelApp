import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getMovies } from "../actions";

const Home = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [input, setInput] = useState("");

    const handeSubmit = (e) => {
        e.preventDefault();
        if (!input) return
        dispatch(getMovies(input));
        navigation.navigate("Movies");
    }

    // console.log(movies);
    // console.log(input);

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Find your movie!</Text>
            <View style={styles.form} >
                <TextInput onChangeText={setInput} value={input} style={styles.input} />
                <TouchableOpacity style={styles.button} onPress={handeSubmit} >
                    <Text style={styles.textButton} >Search</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Favorites")} >
                <Text style={styles.textButton} >Favorites</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
      margin: 0,
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundImage: 'radial-gradient(circle at 3.9% 17.72%, #ff7bbe 0, #ff73c4 10%, #f56ac9 20%, #e663ce 30%, #d45bd3 40%, #be55d8 50%, #a551dd 60%, #864fe2 70%, #5f4fe6 80%, #0351eb 90%, #0053ee 100%)'
    },

    title: {
        fontSize: "xx-large"
    },

    form: {
        flex:1,
        flexDirection: "row",
        maxHeight: 50
    },

    input: {
        flex: 1,
        width: 250,
        height: 50,
        fontSize: "xx-large",
        padding: 10,
        borderWidth: 1,
        borderRightWidth: 0,
        borderStyle: "solid",
        borderColor: "black",
        backgroundColor: "#fff"
    },

    button: {
        height: 50,
        width: 90,
        borderWidth: 1,
        borderStyle: "solid",
        // borderLeftWidth: 0,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "blue"
    },

    textButton: {
        fontSize: "x-large",
        color: "#fff"
    }
});

export default Home;