import React from 'react'
import { useParams} from 'react-router-dom'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import NoImage from '../images/no_image.jpg';
import { useMovieFetch } from '../hooks/useMovieFetch';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import Spinner from './Spinner'
import MovieInfoBar from './MovieInfoBar';
import Actors from './Actors'
import Grid from './Grid'
const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, error, loading} = useMovieFetch(movieId);
    console.log(movie)
    if (loading) return <Spinner />;
   if (error) return <div>Something went wrong...</div>;
    return (
       <>
            <BreadCrumb moveTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                 time={movie.runtime}
                 budget={movie.budget}
                 revenue={movie.revenue}
                 />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actors 
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imageUrl={
                    actor.profile_path 
                      ?  `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` 
                      : NoImage
                    }
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;
