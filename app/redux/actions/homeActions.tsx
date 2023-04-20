import * as USER_CONST from '../../utils/Constants'

export const getCategories = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_CATEGORIES_REQUESTED,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}