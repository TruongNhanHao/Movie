import { useEffect, useState } from "react";
import API from '../API';
import { isPersistedState } from "../helpers";

export const useMovieFetch = movieId => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true); //bat dau bang tim nap du lieu
     const [error, setError]=  useState(false);


       useEffect(() =>{
        const fetchMovie = async () => {
            try{
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                const directors = credits.crew.filter(
                    member => member === 'Director'
                );
                setState({
                    ...movie,
                    actors: credits.cast, //cac diem tin dung 
                    directors
                });
                setLoading(false);
            } catch (error){
                setError(true);
            }
        };  
        const sessionState = isPersistedState(movieId);
        if(sessionState){
            setState(sessionState);
            setLoading(true);
        }

        fetchMovie();
       },[movieId]);


       useEffect(() => {
           sessionStorage.setItem(movieId, JSON.stringify(state))
       }, [movieId, state]);
        return { state, error, loading };
}