import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchCollections} from "../../store/actions/shop";
import CollectionsOverviewContainer from "../../components/Collection/CollectionsOverview/CollectionOverviewContainer";
import CollectionCategory from "../../components/Collection/CollectionCategory/CollectionCategory";
import './Shop.scss';


class Shop extends Component {
    componentDidMount() {
        const {fetchCollections} = this.props;
        fetchCollections();
    }

    render() {
        const {match} = this.props;

        return (
            <main className="shop">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionCategory}/>
            </main>
        );
    }
}

export default connect(null, {fetchCollections})(Shop);
