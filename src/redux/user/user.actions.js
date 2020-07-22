import userActionTypes from './user.types'

// export const setCurrentUser = (user) => {
//     return {
//         type: userActionTypes.SET_CURRENT_USER,
//         payload: user
//     }
// }
export const checkUserSession = () => {
    return {
        type: userActionTypes.CHECK_USER_SESSION
    }
}

// UPDATE USER INFO
export const updateUserInfoStart = (userAndDisplayName) => {
    return {
        type: userActionTypes.UPDATE_USER_INFO_START,
        payload: userAndDisplayName
    }
}
export const updateUserInfoSuccess = (user) => {
    return {
        type: userActionTypes.UPDATE_USER_INFO_SUCCESS,
        payload: user
    }
}
export const updateUserInfoFailure = (error) => {
    return {
        type: userActionTypes.UPDATE_USER_INFO_FAILURE,
        payload: error
    }
}
// SIGN IN
export const googleSignInStart = () => {
    return {
        type: userActionTypes.GOOGLE_SIGN_IN_START
    }
}
export const emailSignInStart = (emailAndPassword) => {
    return {
        type: userActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    }
}
export const signInSuccess = (user) => {
    return {
        type: userActionTypes.SIGN_IN_SUCCESS,
        payload: user
    }
}
export const signInFailure = (error) => {
    return {
        type: userActionTypes.SIGN_IN_FAILURE,
        payload: error
    }
}

export const signInComplete = (user) => {
    return {
        type: userActionTypes.SIGN_IN_COMPLETE,
        payload: user
    }
}


// SIGN OUT
export const signOutStart = (userIDAndCartItems) => {
    return {
        type: userActionTypes.SIGN_OUT_START,
        payload: userIDAndCartItems
    }
}
export const signOutSuccess = () => {
    return {
        type: userActionTypes.SIGN_OUT_SUCCESS
    }
}
export const signOutFailure= (error) => {
    return {
        type: userActionTypes.SIGN_OUT_FAILURE,
        payload: error
    }
}

// SIGN UP
export const signUpStart = (userCredentials) => {
    return {
        type: userActionTypes.SIGN_UP_START,
        payload: userCredentials
    }
}
export const signUpSuccess = ({user, additionalData}) => {
    return {
        type: userActionTypes.SIGN_UP_SUCCESS,
        payload: {user, additionalData}
    }
}
export const signUpFailure = (error) => {
    return {
        type: userActionTypes.SIGN_UP_FAILURE,
        payload: error
    }
}