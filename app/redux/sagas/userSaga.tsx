import { put, takeEvery, call } from 'redux-saga/effects';
import services from '../../services/apiServices/index';
import * as type from '../../utils/Constants';
import * as commonActions from '../actions/commonActions';

export function* loginUser(action) {

    try {
        yield put(commonActions.startSpinner());
        const loginResult = yield call(services.loginAPI, action.payload.data);
        yield put({ type: type.LOGIN_USER_REQUESTED, loginResult });

        if (loginResult !== undefined && loginResult !== null) {
            yield put(commonActions.stopSpinner());
            action.payload.successCallBack(loginResult)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.LOGIN_USERS_FAILED, message: e.message });
    }
}

// export function* signUpUser(action) {
//     try {
//         yield put(commonActions.startSpinner());
//         const signUpResult = yield call(services.signUpAPI, action.payload.data);

//         // const signUpResult = {
//         //     'user_id': 4,
//         //     'name': 'Test User',
//         //     'email':'test@test.com',
//         //     'phone_no':'1234567890'
//         // }
//         yield put({ type: type.SIGNUP_USER_REQUESTED, signUpResult });

//         if (signUpResult !== undefined && signUpResult != null) {
//             yield put(commonActions.stopSpinner());
//             action.payload.successCallBack(signUpResult)

//         } else {
//             action.payload.failureCallBack(null);
//         }
//     } catch (e) {
//         yield put({ type: type.SIGNUP_USER_FAILED, message: e.message });
//     }
// }

// export function* forgotPassword(action) {
//     try {
//         yield put(commonActions.startSpinner());
//         const forgotPasswordResult = yield call(services.forgotPasswordAPI, action.payload.data);
//         yield put({ type: type.FORGOT_PASSWORD_REQUESTED, forgotPasswordResult });

//         if (forgotPasswordResult !== undefined && forgotPasswordResult != null) {
//             yield put(commonActions.stopSpinner());
//             action.payload.successCallBack(forgotPasswordResult)

//         } else {
//             action.payload.failureCallBack(null);
//         }
//     } catch (e) {
//         yield put({ type: type.FORGOT_PASSWORD_FAILED, message: e.message });
//     }
// }
// export function* socialLogin(action) {
//     try {
//         yield put(commonActions.startSpinner());
//         const socailLoginResult = yield call(services.socialLoginAPI, action);
//         yield put({ type: type.SOCIAL_LOGIN_REQUESTED, socailLoginResult });

//         if (socailLoginResult !== undefined && socailLoginResult != null) {
//             yield put(commonActions.stopSpinner());
//             action.payload.successCallBack(socailLoginResult)

//         } else {
//             action.payload.failureCallBack(null);
//         }
//     } catch (e) {
//         yield put({ type: type.SOCIAL_LOGIN_FAILED, message: e.message });
//     }
// }

// export function* verifyOtp(action) {
//     try {
//         yield put(commonActions.startSpinner());
//         const verifyOtpResult = yield call(services.verfiOTPAPI, action.payload.data);
//         yield put({ type: type.VERIFY_OTP_SUCCESS, verifyOtpResult });

//         if (verifyOtpResult !== undefined && verifyOtpResult != null) {
//             yield put(commonActions.stopSpinner());
//             action.payload.successCallBack(verifyOtpResult)

//         } else {
//             action.payload.failureCallBack(null);
//         }
//     } catch (e) {
//         yield put({ type: type.VERIFY_OTP_FAILED, message: e.message });
//     }
// }

// export function* resetPassword(action) {
//     try {
//         yield put(commonActions.startSpinner());
//         const resetPasswordResult = yield call(services.resetPassworddAPI, action.payload.data);
//         yield put({ type: type.RESET_PASSWORD_REQUESTED, resetPasswordResult });

//         if (resetPasswordResult !== undefined && resetPasswordResult != null) {
//             yield put(commonActions.stopSpinner());
//             action.payload.successCallBack(resetPasswordResult)

//         } else {
//             action.payload.failureCallBack(null);
//         }
//     } catch (e) {
//         yield put({ type: type.RESET_PASSWORD_SUCCESS, message: e.message });
//     }
// }
