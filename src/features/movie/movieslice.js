import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import Movieapi from '../../common/api/Movieapi.jsx';
import { Apikey } from '../../common/api/MovieapiKey.jsx';

export const fetchAsyncMovies= createAsyncThunk('movies/fetchAsyncMovies',async (term)=>{
    const i = "tt3896198";
    const response = await Movieapi.get(`?i=${i}&apikey=${Apikey}&s=${term}&type=movie`).catch(err => {
        console.log(err);
      });

    return response.data;
});



export const fetchAsyncShows= createAsyncThunk('shows/fetchAsyncShows',async (term)=>{
    const i = "tt3896198";
    const response = await Movieapi.get(`?i=${i}&apikey=${Apikey}&s=${term}&type=series`).catch(err => {
        console.log(err);
      });

    return response.data;
});


export const fetchAsyncShowsMoviesDetails= createAsyncThunk('showsmovies/fetchAsyncShowsMoviesDetails',async (id)=>{
    // const i = "tt3896198";
    const response = await Movieapi.get(`?i=${id}&apikey=${Apikey}&Plot=full`).catch(err => {
        console.log(err);
      });

    return response.data;
});

const initialState = {
    movies: {},
    shows: {},
    showsmovies: {},
   
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
    //    addMovies :(state,{payload}) =>{
    //     state.movies = payload;
    //    },
       removeAsyncShowsMoviesDetails :(state) =>{
        state.showsmovies = {};
       }
       
       

    },  
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, (state) => {
                console.log('pending');
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                console.log('fetch successful');
                return {
                    ...state,
                    movies: action.payload,
                };
            })
            .addCase(fetchAsyncMovies.rejected, (state) => {
                console.log('rejected');
            })
            .addCase(fetchAsyncShows.fulfilled, (state, action) => {
                console.log('Fetching shows - fulfilled');
                return {
                    ...state,
                    shows: action.payload,
                };
            })
            .addCase(fetchAsyncShowsMoviesDetails.fulfilled, (state, action) => {
                console.log('Fetching showsormovies - fulfilled');
                return {
                    ...state,
                    showsmovies: action.payload,
                };
            })
            
          
    },
})

export const {removeAsyncShowsMoviesDetails} = movieSlice.actions;
export const getAllmovies=(state)=>state.movies.movies
export const getAllshows=(state)=>state.movies.shows
export const getAllshowsDetails=(state)=>state.movies.showsmovies
export default movieSlice.reducer