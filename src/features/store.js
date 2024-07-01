import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movie/movieslice";


export const store = configureStore({
    reducer: {
        movies:moviesReducer
    },
})