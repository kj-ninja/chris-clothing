import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {selectIsCollectionLoading} from "../../../store/selectors/shop";
import withSpinner from "../../UI/withSpinner/withSpinner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionLoading
});

const CollectionsOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;