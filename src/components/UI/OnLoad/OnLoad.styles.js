import styled from "styled-components";

const fade = keyframes`
    100% {
        visibility: hidden;
        opacity: 0;
    }
`;

export const onLoadContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;
    transition: all 0.25s ease 0s;
    animation: ${fade} 1s ease-out 1s forwards;
    opacity: 1;
`;

export const onLoad = styled.div`
    text-align: center;
    
    h1 {
      text-align: center;
      font-weight: bold;
    }
`;