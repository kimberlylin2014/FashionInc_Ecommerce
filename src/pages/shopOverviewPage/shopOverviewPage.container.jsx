import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ShopOverviewPage from './shopOverviewPage.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const ShopOverviewPageContainer = connect(mapStateToProps)(WithSpinner(ShopOverviewPage));

export default ShopOverviewPageContainer;
