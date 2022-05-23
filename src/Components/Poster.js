import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Poster({ url, id, name }) {
    return (
        <Container>
            <Link to={`/filme/${id}`}>
                <img src={url} alt={name} />
            </Link>
        </Container>
    );
}



const Container = styled.div`
display: flex;
justify-content: center;
box-sizing: border-box;
width: 145px;
padding: 8px;
background: #ffffff;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
box-sizing: border-box;
margin-top: 35px;


img {
width: 100%;
height: 100%;
object-fit: cover;
}
`;