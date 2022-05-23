import styled from "styled-components";

export default function Footer({ url, title }) {
  return (
    <Container>
      <img src={url} alt="" />
      <span>{title}</span>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 117px;
  padding: 8px;
  bottom: 0px;
  background-color: #c3cfd9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  box-sizing: border-box;

  img {
    width: 64px;
    height: 89px;
    margin-right: 15px;    
    object-fit: cover;
  }

`;

