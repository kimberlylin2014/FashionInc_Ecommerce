import React from 'react';
import './shopPage.styles.scss';
import  {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import SectionPageContainer from '../sectionPage/sectionPage.container'
import ShopOverviewPageContainer from '../shopOverviewPage/shopOverviewPage.container'

class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={ShopOverviewPageContainer}/>
                <Route exact path={`${match.path}/:section`} component={SectionPageContainer}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);