import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        PopularMovies: null,
        TrailerVideo: null,
        TrendingMovies: null,
        UpcomingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.TrendingMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.TrailerVideo = action.payload;
        },
    }
})

export const { addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTrendingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;