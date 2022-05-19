import loading from "../../assets/loading.gif";
import "./movieCatalogue.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCover from "../MovieCover/MovieCover";

export default function MovieCatalogue() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
            setMovies(response.data);
        });
    }, []);

    return (
        <div className="movie-catalogue">
            <h1>Selecione o filme</h1>
            <div className="movie-container">
                {movies ? (
                    movies.map((movie, index) => (
                        <MovieCover key={index} cover={movie.posterURL} title={movie.title} id={movie.id} />
                    ))
                ) : (<img src={loading} />
                )}
            </div>
        </div>
    );
}