import { put, takeEvery, call } from 'redux-saga/effects';
import services from '../../services/apiServices/index';
import * as type from '../../utils/Constants';
import * as commonActions from '../actions/commonActions';

export function* getCategories(action: { payload: { successCallBack: (arg0: any) => void; failureCallBack: (arg0: null) => void; }; }) {

    try {
        yield put(commonActions.startSpinner());
        const  categories = yield call(services.getCategoriesAPI);
        yield put({ type: type.GET_CATEGORIES_SUCCESS, categories });

        if (categories !== undefined && categories !== null) {
            yield put(commonActions.stopSpinner());
            action.payload.successCallBack(categories)

        } else {
            yield put(commonActions.stopSpinner());
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.GET_CATEGORIES_FAILED, message: e.message });
    }
}