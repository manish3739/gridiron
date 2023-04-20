// Initial state

import * as type from '../../utils/Constants'

const initialState = {
    loading: false,
    error: null,
    categories: [],
};
// Redux : Counter Reducer
const homeReducer = (state = initialState, action: { type: any; categories: any; message: any; }) => {
    switch (action.type) {
        case type.GET_CATEGORIES_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.categories,
                loading: false,
            };
        case type.GET_CATEGORIES_FAILED:
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

export default homeReducer;