import  { connect } from 'react-redux';
import { selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import SectionPage from './sectionPage.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

// const mapStateToProps = createStructuredSelector({
//     isLoading: (state) => !selectIsCollectionsLoaded(state)
// })

const mapStateToProps = state => ({
    isLoading: !selectIsCollectionsLoaded(state)
})

const SectionPageContainer = connect(mapStateToProps)(WithSpinner(SectionPage));

export default SectionPageContainer;