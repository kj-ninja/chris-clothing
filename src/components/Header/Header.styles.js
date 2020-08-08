import styled from "styled-components";
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 60px;
    padding: 10px;
    max-width: 1500px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: space-between;
    
    @media screen and (min-width: 800px) {
        height: 70px;
        margin: 0 auto 25px;
    }

`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    padding: 0;
    
    @media screen and (min-width: 800px) {
        width: 70px;
    }
`

export const Nav = styled.nav`
    width: 83%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media screen and (min-width: 800px) {
        width: 50%;
    }
`

export const NavItem = styled(Link)`
    padding: 15px;
    cursor: pointer;
    
    @media screen and (min-width: 800px) {
        padding: 25px;
    }
`