import { all, fork, takeEvery } from 'redux-saga/effects';
import * as type from '../../utils/Constants'
import { getCategories } from './homeSaga';
import { loginUser } from './userSaga';

const watchUser = function* watchUser() {
     yield takeEvery(type.LOGIN_USER_REQUESTED, loginUser);
     yield takeEvery(type.GET_CATEGORIES_REQUESTED, getCategories);
}

const rootSaga = function* mySagas() {
     yield watchUser();
};

export default rootSaga;