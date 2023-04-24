import { put, call } from 'redux-saga/effects';
import services from '../../services/apiServices/index';
import * as type from '../../utils/Constants';
import * as commonActions from '../actions/commonActions';

export function* getCategories(action) {

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
        console.log("e GET_CATEGORIES_FAILED:", e);
        yield put({ type: type.GET_CATEGORIES_FAILED, message: e.message });
    }
}