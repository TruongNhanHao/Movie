import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import React from 'react';
import useHomeFetch from '../hooks/useHomeFetch';
import HeroImg from './HeroImg';
import styled from 'styled-components';
import NoImage from '../images/no_image.jpg';
import Grid from './Grid';
import Thumb from './Thumb';
import BackDrop from '../img123/avatar1.svg'
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

const Home = () => {
    const {state, loading, error , setSearchTerm, searchTerm, setIsLoading} = useHomeFetch();
    // console.log(state)
   

    return (
        <>
           {!searchTerm && state.results[0] ? (
            <HeroImg image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
            />
            ) : null }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid 
            header={searchTerm ? 'Search Result' : 'Popular Movies'}>
            {
                state.results.map(movie => (
                    <Thumb  
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path ?
                         `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage }
                    movieId={movie.id}                    
                        />
               ))
            }
            </Grid>
           {loading && <Spinner />}
           {state.page < state.total_pages && !loading && (
               <Button text='Next more' callback={()=> setIsLoading(true)}/>

           )}
            
        </>
    );
};

// const HomeStyled = styled.section`
//   margin: auto;

// `;
export default Home
