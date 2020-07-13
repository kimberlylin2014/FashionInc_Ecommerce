import shopActionTypes from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util'
// export const updateCollections = (collectionsMap) => {
//     return {
//         type: shopActionTypes.UPDATE_COLLECTIONS,
//         payload: collectionsMap
//     }
// }

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchColletionsFailure = (errorMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
export const fetchCollectionsStartAsync = () => {
    // return a function that passes in dispatch
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())
        
        collectionRef.get()
            .then(snapShot => {
                const collectionsMap = convertCollectionSnapshotToMap(snapShot);
                
                // updateCollections(collectionMap);
                dispatch(fetchCollectionsSuccess(collectionsMap));
                // this.setState({loading: false})
            })
            .catch(error => dispatch(fetchColletionsFailure(error.message)))
    }
}
// action creator that returns the function that gets the dispatch