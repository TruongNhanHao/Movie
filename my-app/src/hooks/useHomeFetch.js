import React, {useState, useEffect} from 'react'
import API from '../API'
import {isPersistedState} from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 500,
    total_results: 1000
}

export const useHomeFetch = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // console.log(setSearchTerm)
    const fetchMovies = async (page, searchTerm = '') =>{
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
        //    console.log(movies);
           setState(prev => ({
               ...movies,
               results: 
                 page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
           }));
        }catch (error){
            setError(true);
        }
        setLoading(false);
    };
    useEffect(() => {
       if(!searchTerm){
        const sessionState = isPersistedState('HomePage');
        if(sessionState){
            console.log('sessionState')
            setState(sessionState);
            return;
        }
       }
        console.log('APIIIIIIIII');
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm])

    useEffect(() => {
       if(!isLoading) return;
       fetchMovies(state.page +1, searchTerm);
       setIsLoading(false);   
    }, [searchTerm, isLoading, state])

    useEffect(() => {
        if(!searchTerm) sessionStorage.setItem('HomePage', JSON.stringify(state))
    }, [searchTerm, state])
    return {state, loading, error, searchTerm, setIsLoading, setSearchTerm}
}
export default useHomeFetch;