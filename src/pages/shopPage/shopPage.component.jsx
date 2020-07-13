import React from 'react';
import './shopPage.styles.scss';

import ShopOverViewPage from '../shopOverviewPage/shopOverviewPage.component'
import SectionPage from '../sectionPage/sectionPage.component';
import  {Route} from 'react-router-dom';

import {connect} from 'react-redux';
// import {updateCollections} from '../../redux/shop/shop.actions';
// import { firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'
const ShopOverViewPageWithSpinner = WithSpinner(ShopOverViewPage);
const SectionPageWithSpinner = WithSpinner(SectionPage)

class ShopPage extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         loading: true
    //     }
    // }
    // unsubscribeFromSnapShot = null;
    componentDidMount() {
        // const {updateCollections} = this.props;
        // const collectionRef = firestore.collection('collections');

        
        // collectionRef.get()
        //     .then(snapShot => {
        //         const collectionMap = convertCollectionSnapshotToMap(snapShot);
        //         updateCollections(collectionMap);
        //         this.setState({loading: false})
        //     })

        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
    render() {
        const {match, isCollectionFetching, isCollectionLoaded} = this.props;
        // const {loading} =this.state; 
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <ShopOverViewPageWithSpinner isLoading={!isCollectionLoaded} {...props} /> }/>
            <Route exact path={`${match.path}/:section`} render={(props) => <SectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/> }/>

        </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    }
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);