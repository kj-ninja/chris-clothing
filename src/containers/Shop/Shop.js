import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firestore} from "../../firebase/firebase";
import {Route} from 'react-router-dom';
import {updateCollections} from "../../store/actions/shop";
import CollectionsOverview from "../../components/Collection/CollectionsOverview/CollectionsOverview";
import './Shop.scss';
import CollectionCategory from "../../components/Collection/CollectionCategory/CollectionCategory";
import {convertCollectionsSnapshotToMap} from "../../firebase/firebase";
import withSpinner from "../../components/UI/withSpinner/withSpinner";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionCategoryWithSpinner = withSpinner(CollectionCategory);

class Shop extends Component {
    state = {
        isLoading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({isLoading: false});
        })
    }

    render() {
        const {match} = this.props;
        const {isLoading} = this.state;

        return (
            <main className="shop">
                <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionCategoryWithSpinner isLoading={isLoading} {...props}/>}/>
            </main>
        );
    }
}

export default connect(null, {updateCollections})(Shop);
