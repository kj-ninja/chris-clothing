import React from 'react';
import Catalog from "../../containers/Catalog/Catalog";

import {HomePageContainer} from "./Home.styles";

const Home = () => (
    <HomePageContainer>
        <Catalog/>
    </HomePageContainer>
);

export default Home;