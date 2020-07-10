import React from 'react';
import './shopPage.styles.scss';

import ShopOverViewPage from '../shopOverviewPage/shopOverviewPage.component'
import SectionPage from '../sectionPage/sectionPage.component';
import  {Route} from 'react-router-dom';

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={ShopOverViewPage}/>
            <Route exact path={`${match.path}/:section`} component={SectionPage}/>
        </div>
    )
}

export default ShopPage;