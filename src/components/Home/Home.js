import React from 'react';
import Catalog from "../../containers/Catalog/Catalog";
import './Home.scss';

import {HomePageContainer} from "./Home.styles";

const Home = () => (
    <HomePageContainer>
        <Catalog/>
    </HomePageContainer>
);

export default Home;