import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util';
import { takeLatest, call, put} from 'redux-saga/effects'
import shopActionTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../../redux/shop/shop.actions'

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapShot)
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
   
}
export function* fetchCollectionsStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}