import React, {useState} from 'react'
import axios from "../axios-orders";

const UserContext = React.createContext();

const initState = {
    userId : null,
    token : null,
    refreshToken : null,
    savingUser : false,
    loginIn : false,
    error : null
}

export const UserStore = (props) =>  {
    const [state, setState] = useState(initState)

    const signUp = (email, password) => {
            setState({...state, savingUser : true})
            // data g firebase ruu ilgeene
            const data = {
                email,
                password,
                returnSecureToken : true
            }
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvuh7Pf4J6kiMW8iyAEjNmMAxuIywX8i4', data)
            .then(res => {
                const token = res.data.idToken
                const userId = res.data.localId
                const refreshToken = res.data.refreshToken
                setState({...state, savingUser : false, error : null, token, userId, refreshToken})
    
                localStorage.setItem("token", token)
                localStorage.setItem("userId", userId)
                localStorage.setItem("refreshToken", refreshToken)
            })
            .catch(error => {
                setState({...state, savingUser : false, error})
            })
    }
    const autoLogin = (token, userId, refreshToken, expireDate) => {
        loginSuccess(token, userId, refreshToken, expireDate)
    }
    const autoLogoutAfterMillisec = (msec) => {
        logoutAfterMilliSec(msec)
    }
    const login = (email, password) => {
        setState({...state, loginIn : true})
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
            
            loginSuccess(token, userId, refreshToken, expireDate)
            logoutAfterMilliSec(expireSec * 1000);
        })
        .catch(error => {
            setState({...state, loginIn : false, error})
        })
    }
    const loginSuccess = (token, userId, refreshToken, expireDate) => {
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("expireIn", expireDate)

        setState({...state, loginIn : false, error : null, token, userId, refreshToken})
    }
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("expireIn")

        setState(initState)
    }
    
    // ******************** auto token shinechileh. zarim huvisagch nar ni zurj magadgu ************

    // const autoRenewTokenAfterMillisec = (milliSec) => {
    //     // token shinechleh code
    //     axios
    //       .post(
    //         "https://securetoken.googleapis.com/v1/token?key=AIzaSyCEmDZW6k2XJlQritKoYeJG14ExYa1rRSM",
    //         {
    //           grant_type: "refresh_token",
    //           refresh_token: localStorage.getItem("refreshToken"),
    //         }
    //       )
    //       .then((result) => {
    //         console.log("Token refreshed .....", result.data);
    //         const token = result.data.id_token;
    //         const userId = result.data.user_id;
    //         const expiresIn = result.data.expires_in;
    //         const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
    //         const refreshToken = result.data.refresh_token;
    
    //         loginUserSucces(token, userId, expireDate, refreshToken);
    //       })
    //       .catch((err) => {
    //         setState({
    //           ...state,
    //           logginIn: false,
    //           error: err.message,
    //           errorCode: err.code,
    //           token: null,
    //           userId: null,
    //           expireDate: null,
    //         });
    //       });
    
    //     // avtomat logout
    //     setTimeout(() => {
    //       // logout
    //       autoRenewTokenAfterMillisec(3600000);
    //     }, milliSec);
    //   };
    const logoutAfterMilliSec = (msec) => {
            setTimeout(() => logout(), msec) 
    }
    return (
        <UserContext.Provider value={{
            state,
            login,
            logout,
            logoutAfterMilliSec,
            signUp,
            autoLogin,
            autoLogoutAfterMillisec
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;