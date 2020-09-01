import React from 'react';
import Catalog from "../../containers/Catalog/Catalog";
import './Home.scss';

import {HomePageContainer} from "./Home.styles";

const Home = () => (
    <HomePageContainer>
        <Catalog/>
        <div>
            <h2>New Collection</h2>
        </div>
    </HomePageContainer>
);

export default Home;