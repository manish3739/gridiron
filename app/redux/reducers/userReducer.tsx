// Initial state

import * as type from '../../utils/Constants'

const initialState = {
    loginResult: [],
    signUpResult: [],
    loading: false,
    error: null,
    forgotPassword: [],
    resetPassword: [],
};

// Redux : Counter Reducer
const userReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case type.LOGIN_USER_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loginResult: action.loginResult,
                loading: false,
            };
        case type.LOGIN_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        default: {
            return state;
        }
    }
}

export default userReducer;