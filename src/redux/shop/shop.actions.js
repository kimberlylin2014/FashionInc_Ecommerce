import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
// export const fetchCollectionsStartAsync = () => {
//     // return a function that passes in dispatch
//     return (dispatch) => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart())
        
//         collectionRef.get()
//             .then(snapShot => {
//                 const collectionsMap = convertCollectionSnapshotToMap(snapShot);
                
//                 // updateCollections(collectionMap);
//                 dispatch(fetchCollectionsSuccess(collectionsMap));
//                 // this.setState({loading: false})
//             })
//             .catch(error => dispatch(fetchColletionsFailure(error.message)))
//     }
// }
// action creator that returns the function that gets the dispatch