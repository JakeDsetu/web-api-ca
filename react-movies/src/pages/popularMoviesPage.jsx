import React from "react";
import { getPopular } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const HomePage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['popular'],
    queryFn: getPopular,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};

export default HomePage;
