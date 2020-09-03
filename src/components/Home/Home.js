import React, {useEffect, useState} from 'react';
import Catalog from "../../containers/Catalog/Catalog";
import './Home.scss';

import {items} from "./data";
import {animateScroll as scroll} from "react-scroll";
import Fade from 'react-reveal/Fade';
import {HomePageContainer} from "./Home.styles";
import CollectionItem from "../Collection/CollectionItem/CollectionItem";
import {CollectionPreview} from "../Collection/CollectionList/CollectionList.styles";
import {Link} from "react-router-dom";

const Home = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(()=> {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 600){
                setShowScroll(true)
            } else if (showScroll && window.pageYOffset <= 600){
                setShowScroll(false)
            }
        };

        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    });

    return (
        <HomePageContainer>
            <Catalog/>
            <div className="sells">
                <h2>Top sells</h2>
                <p>Best selling stuff this week</p>
            </div>
            <CollectionPreview>
                {items
                    .filter((item, i) => (i < 4))
                    .map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))}
            </CollectionPreview>
            <div className="sales">
                <Fade bottom>
                    <h3>New Autumn Collection!</h3>
                    <p>30% OFF</p>
                    <Link to={'/shop'}>Shop now</Link>
                </Fade>
            </div>
            <div className="sells">
                <h2>New collection</h2>
                <p>Discover the new collection</p>
            </div>
            <CollectionPreview>
                {items
                    .filter((item, i) => (i >= 4))
                    .map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))}
            </CollectionPreview>
            <div className={`to-top ${showScroll ? 'visible' : ''}`} onClick={()=>scroll.scrollToTop()}>
                <img src={require('../../assets/to-top.svg')} alt=""/>
            </div>
        </HomePageContainer>
    );
}

export default Home;