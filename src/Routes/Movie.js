import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieSession from "../Components/MovieSession";
import PageTop from "../Components/PageTop";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Movie({ user, setUser }) {
    const [sessions, setSessions] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then(response => {
            setSessions(response.data)
        });

    }, [movieId]);

    return (
        <>
        <Top>
            <Header />
            <PageTop route="movie" />
        </Top>
            <Container>
                <Time>
                    {sessions.length !== 0 ? sessions.days.map((day, index) =>
                        <MovieSession key={index} session={day} user={user} setUser={setUser} />) : <></>}
                </Time>
            </Container>
            <Footer url={user.movie.url} title={user.movie.title} />
        </>


    );
}

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
justify-items: center;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`;
const Time = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
justify-items: center;
text-align: center;
display: flex;
padding: 100px;
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
flex-direction: column;
width: 100%;
padding-top: 100px;
`;