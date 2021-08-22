import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home.js";
import MoviesContainer from './components/MoviesContainer.js';
import { applyMiddleware, createStore } from "redux";
import moviesReducer from "./reducer/index.js";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import MovieDetails from "./components/MovieDetails.js";
import Favorites from "./components/Favorites.js";

const Stack = createStackNavigator();
const store = createStore(moviesReducer, applyMiddleware(thunk));
const navTheme = DefaultTheme;
navTheme.colors.background = "#8F00FF";
navTheme.colors.card = "#8F00FF"
navTheme.colors.border = "#8F00FF"

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer theme={navTheme} >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Movies" component={MoviesContainer} />
          <Stack.Screen name="Details" component={MovieDetails} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}