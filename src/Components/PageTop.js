import styled from "styled-components";

export default function PageTop({route}){

    function validateRoute(route){

        if (route === "home") return "o filme";

        if (route === "movie") return "o horário";

        if (route === "session") return "o(s) assentos";
        
    }

    const text = validateRoute(route);


    
    return(
        <Top>
        <div className={route}>
            <span>{route !== "success" ? `Selecione ${text}` : "Pedido feito com sucesso!"}</span>
        </div>
        </Top>
    );
}

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

`;