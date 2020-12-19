
import axios from "axios";

export const login = (email, password) => {
    return function(dispatch) {
        dispatch(loginStart())
        // data g firebase ruu ilgeene
        const data = {
            email,
            password,
            returnSecureToken : true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvuh7Pf4J6kiMW8iyAEjNmMAxuIywX8i4', data)
        .then(res => {
            // console.log(res)
            const token = res.data.idToken
            const userId = res.data.localId
            const refreshToken = res.data.refreshToken
            // expire hiih hugatsaag olj local storage ruu hadgalna, daraa dahin login hiih uyd ter hugatsaa ungursun esehiig shalgadag
            const expireSec = 3600;
            const expireDate = new Date(new Date().getTime() + expireSec * 1000)

            dispatch(loginSuccess(token, userId, refreshToken))
            dispatch(logoutAfterMilliSec(expireSec * 1000));
            
            localStorage.setItem("token", token)
            localStorage.setItem("userId", userId)
            localStorage.setItem("refreshToken", refreshToken)
            localStorage.setItem("expireIn", expireDate)
        })
        .catch(err => {
            console.log(err)
            dispatch(loginError(err))
        })
    }
}
export const loginStart = () => {
    return {
        type: "LOGIN_START"
    }
}
export const loginSuccess = (token, userId, refreshToken) => {
    return {
        type: "LOGIN_SUCCESS",
        token,
        userId,
        refreshToken
    }
}
export const loginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        error
    }
}
export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("expireIn")
    return {
        type: "LOGOUT"
    }
}
export const logoutAfterMilliSec = (msec) => {
    // !!! copy paste bolohoor huvisagchiin ner uur bj magadgui
    // token shinechleh code
    // axios
    //   .post(
    //     "https://securetoken.googleapis.com/v1/token?key=AIzaSyCEmDZW6k2XJlQritKoYeJG14ExYa1rRSM",
    //     {
    //       grant_type: "refresh_token",
    //       refresh_token: localStorage.get("refresh_token")
    //     }
    //   )
    //   .then(result => {
    //     const token = result.data.id_token;
    //     const userId = result.data.user_id;
    //     const token = result.data.idToken;
    //     const userId = result.data.localId;
    //     const expiresIn = result.data.expiresIn;
    //     const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
    //     const refreshToken = result.data.refreshToken;
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("userId", userId);
    //     localStorage.setItem("expireDate", expireDate);
    //     localStorage.setItem("refreshToken", refreshToken);
    //     dispatch(loginUserSuccess(token, userId));
    //   })
    //   .catch(err => {
    //     dispatch(signupUserError(err));
    //   });
    return function(dispatch) {
        setTimeout(() => dispatch(logout()), msec)
    } 
}