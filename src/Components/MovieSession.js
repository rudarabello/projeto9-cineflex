import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MovieSession({ session, user, setUser, index }) {
    const { showtimes } = session;
    return (
        <Container>
             <Span>{`${session.weekday} - ${session.date}`} </Span>
             <ButtonContainer>
            {showtimes.map((showtime, index) =>
                <Link to={`/sessao/${showtime.id}`}>
                     <Button type="button" onClick={() => setUser(
                            {
                                ...user,
                                session: {
                                    id: showtime.id,
                                    date: session.date,
                                    weekday: session.weekday,
                                    time: showtime.name
                                }
                            })
                        }>{showtime.name}</Button>
                </Link>
            )}
             </ButtonContainer>
        </Container>
    );
}



const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


const Button = styled.button`
    width: 82px;
    height: 43px;
    margin: 23px;
    margin-right: 8px;
    background-color: #E8833A;
    color: #ffffff;
    border-radius: 3px;
`;

const Span = styled.span`
    font-size: 15px;
    padding-bottom: 1px;
`;