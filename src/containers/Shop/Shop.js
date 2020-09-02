import React, {useEffect, lazy, Suspense, useState} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchCollectionsStart} from "../../store/actions/shop";
import './Shop.scss';
import '../../components/Home/Home.scss';
import Spinner from "../../components/UI/Spinner/Spinner";
import {animateScroll as scroll} from "react-scroll";

const CollectionsOverviewContainer = lazy(()=> import('../../components/Collection/CollectionsOverview/CollectionOverviewContainer'))
const CollectionCategory = lazy(()=> import('../../components/Collection/CollectionCategory/CollectionCategory'));

const Shop = ({fetchCollectionsStart, match}) => {
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

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <main className="shop">
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionCategory}/>
                <div className={`to-top ${showScroll ? 'visible' : ''}`} onClick={()=>scroll.scrollToTop()}>
                    <img src={require('../../assets/to-top.svg')} alt=""/>
                </div>
            </Suspense>
        </main>
    );
};

export default connect(null, {fetchCollectionsStart})(Shop);
