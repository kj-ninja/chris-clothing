import React, {useEffect, lazy, Suspense, useState} from 'react';
import './Shop.scss';
import '../../components/Home/Home.scss';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchCollectionsStart} from "../../store/actions/shop";
import Spinner from "../../components/UI/Spinner/Spinner";
import ArrowToTop from "../../components/ArrowToTop/ArrowToTop";

const CollectionsOverview = lazy(() => import('../../components/Collection/CollectionsOverview/CollectionsOverview'));
const CollectionCategory = lazy(() => import('../../components/Collection/CollectionCategory/CollectionCategory'));

const Shop = ({fetchCollectionsStart, match}) => {
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 700){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 700){
            setShowScroll(false)
        }
    };
    useEffect(() => {
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
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionCategory}/>
                <ArrowToTop show={showScroll}/>
            </Suspense>
        </main>
    );
};

export default connect(null, {fetchCollectionsStart})(Shop);