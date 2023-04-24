import * as USER_CONST from '../../utils/Constants'

export const getCategories = (data: any, successCallBack: any, failureCallBack: any) => {
    return {
        type: USER_CONST.GET_CATEGORIES_REQUESTED,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}