import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return (
    <div className='-mt-10 pl-12 relative z-20'>
      <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.TrendingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.PopularMovies} />
      <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
    </div>
  )
}

export default SecondaryContainer
