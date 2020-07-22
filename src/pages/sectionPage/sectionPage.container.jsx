import  { connect } from 'react-redux';
import { selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import SectionPage from './sectionPage.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const mapStateToProps = state => ({
    isLoading: !selectIsCollectionsLoaded(state)
})

const SectionPageContainer = connect(mapStateToProps)(WithSpinner(SectionPage));

export default SectionPageContainer;