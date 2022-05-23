import loading from "../assets/loading.gif";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Poster from "../Components/Poster";
import Header from "../Components/Header";
import PageTop from "../Components/PageTop";

export default function Home({ user, setUser }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            console.log(response);
            setMovies(response.data)
        });

    }, []);

    return (
        <>
        <Top>
            <Header />
            <PageTop route="home"/>
        </Top>
        <Container>
            {movies ? (movies.map(movie => <div key={movie.id} onClick={() => setUser( 
                { ...user, movie: { id: movie.id, title: movie.title, url: movie.posterURL } }
                )}>
                <Poster url={movie.posterURL} id={movie.id} name={movie.title} />
                </div>
                )):
                (<img src={loading} alt="" />)}
        </Container>
        </>
    );
}


const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`;

const Top = styled.div`
text-align: center;
font-family: inherit;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding-top: 100px;
`;