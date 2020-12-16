
const initState = {
    userId : null,
    token : null,
    refreshToken : null,
    saving : false,
    loginIn : false,
    error : null
}
const loginSignUpReducer = (state = initState, action) => {
    switch(action.type){
        case "SIGN_UP_START" :
            return {
                ...state,
                saving : true
            }
        case "SIGN_UP_SUCCESS" :
            return {
                ...state,
                saving : false,
                error : null,
                userId : action.userId,
                token : action.token,
                refreshToken : action.refreshToken
            }
        case "SIGN_UP_ERROR" :
            return {
                ...state,
                saving : false,
                error : action.error
            }
        case "LOGIN_START" :
            return {
                ...state,
                loginIn : true
            }
        case "LOGIN_SUCCESS" :
            return {
                ...state,
                loginIn : false,
                error : null,

                userId : action.userId,
                token : action.token,
                refreshToken : action.refreshToken
            }
        case "LOGIN_ERROR" :
            return {
                ...state,
                loginIn : false,
                error : action.error
            }
        case "LOGOUT" :
            return {
                ...state,
                error : null,
                userId : null,
                token : null,
                refreshToken : null
            }
        default : return state
    }
}
export default loginSignUpReducer