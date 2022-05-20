import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";



export default function MovieCatalogue() {
    const [sessions, setSessions] = useState(null);
    const { idMovie } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        promise.then((response) => {
            setSessions(response.data);
        });
    }, [idMovie]);

    return (
        <div className="home">
      <Header />
         </div>
        <h1>Selecione o horário</h1>
        
          {sessions ? (
            sessions.days.map((session, index) => (
              <DaySessions weekday={session.weekday} date={session.date} sessionsTimes={session.showtimes} key={index} />
            ))
          ) : (
            <Loading />
          )}
        </SessionsContainer>
  
        { sessions ? <Footer movieCover={sessions.posterURL} movieTitle={sessions.title} /> : <></> }
      </Container >
    );
}