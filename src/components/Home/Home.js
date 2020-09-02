import React, {useEffect, useState} from 'react';
import Catalog from "../../containers/Catalog/Catalog";
import './Home.scss';

import {animateScroll as scroll} from "react-scroll";
import Fade from 'react-reveal/Fade';
import {HomePageContainer} from "./Home.styles";
import CollectionItem from "../Collection/CollectionItem/CollectionItem";
import {CollectionPreview} from "../Collection/CollectionList/CollectionList.styles";
import {Link} from "react-router-dom";

const Home = () => {
    const [items, setItems] = useState([
        {
            imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
            id: 20,
            name: "Grey Jean Jacket",
            price: 90
        },
        {
            imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
            id: 13,
            name: "Nike White AirForce",
            price: 160
        },
        {
            imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
            name: "Blue Tanktop",
            id: 23,
            price: 25
        },
        {
            imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
            id: 30,
            name: "Camo Down Vest",
            price: 325
        },
        {
            imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
            name: "Nike Red High Tops",
            price: 160,
            id: 14
        },
        {
            name: "Red Dots Dress",
            price: 80,
            imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
            id: 26
        },
        {
            id: 34,
            name: "Jean Long Sleeve",
            imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
            price: 40
        },
        {
            price: 18,
            id: 5,
            imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
            name: "Green Beanie"
        }
    ]);
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
                    <Link to={'/'}>Shop now</Link>
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