import axios from 'axios';
import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

const Home = () => {



    useEffect(() => {

        const movieText = "Harry"

        const fetchMovie = async () => {
            try {
                const data =  await axios.get("https://imdb-api.com/API/SearchTitle/k_uj955a17/h");
                console.log(data)
            } catch (error) {
                console.log(error);
            }

        }
        fetchMovie();
    }, [])

    return (
        <div>
            <MovieList />
        </div>
    )
}

export default Home
