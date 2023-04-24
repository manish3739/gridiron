import { put, call } from 'redux-saga/effects';
import services from '../../services/apiServices/index';
import * as type from '../../utils/Constants';
import * as commonActions from '../actions/commonActions';

export function* loginUser(action) {
    try {
        yield put(commonActions.startSpinner());
        let loginResult = yield call(services.loginAPI, action.payload.data);
        yield put({ type: type.LOGIN_USER_REQUESTED, loginResult });

        if (loginResult !== undefined && loginResult !== null) {
            yield put(commonActions.stopSpinner());
            action.payload.successCallBack(loginResult)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        console.log("e LOGIN_USERS_FAILED:", e);
        yield put({ type: type.LOGIN_USERS_FAILED, message: e.message });
    }
}
