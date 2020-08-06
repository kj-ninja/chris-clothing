import styled from 'styled-components';
import {Link} from "react-router-dom";

export const LoginContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
  
    @media screen and (min-width: 600px){
        width: 450px;
    }
`;

export const LoginTitle = styled.h2`
    margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SignUpLink = styled(Link)`
    display: block;
    padding: 15px 0;
    margin-top: 20px;
    font-size: 18px;
    
    span {
        color: #357ae8;
    }
`