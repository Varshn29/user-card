import { GET_SINGLE_USER, GET_SINGLE_USER_FAILURE, GET_SINGLE_USER_SUCCESS } from '../action/constants';

const initialState = {
    isLoading: false,
    singleUserData: {},
    error: null
}

export const singleUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_USER: {
            return { ...state, isLoading: true }
        }
        case GET_SINGLE_USER_SUCCESS: {
            return { ...state, singleUserData: action.payload, isLoading: false }
        }
        case GET_SINGLE_USER_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}