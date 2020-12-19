
import axios from "axios";

export const signUp = (email, password) => {
    return function(dispatch) {
        dispatch(signUpStart())
        // data g firebase ruu ilgeene
        const data = {
            email,
            password,
            returnSecureToken : true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvuh7Pf4J6kiMW8iyAEjNmMAxuIywX8i4', data)
        .then(res => {
            console.log(res)
            const token = res.data.idToken
            const userId = res.data.localId
            const refreshToken = res.data.refreshToken
            dispatch(signUpSuccess(token, userId, refreshToken))

            localStorage.setItem("token", token)
            localStorage.setItem("userId", userId)
            localStorage.setItem("refreshToken", refreshToken)
        })
        .catch(err => {
            console.log(err)
            dispatch(signUpError(err))
        })
    }
}
export const signUpStart = () => {
    return {
        type: "SIGN_UP_START"
    }
}
export const signUpSuccess = (token, userId, refreshToken) => {
    return {
        type: "SIGN_UP_SUCCESS",
        token,
        userId,
        refreshToken
    }
}
export const signUpError = (error) => {
    return {
        type: "SIGN_UP_ERROR",
        error
    }
}