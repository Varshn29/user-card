import { GET_SINGLE_USER, GET_SINGLE_USER_FAILURE, GET_SINGLE_USER_SUCCESS } from './constants';
import axios from 'axios';

const getSingleUser = () => {
    return {
        type: GET_SINGLE_USER
    }
} 

const getSingleUserSuccess = (data) => {
    return {
        type: GET_SINGLE_USER_SUCCESS,
        payload: data
    }
} 

const getSingleUserFailure = (error) => {
    return {
        type: GET_SINGLE_USER_FAILURE,
        payload: error
    }
} 

export const fetchSingleUser = () => {
    return (dispatch) => {
        dispatch(getSingleUser())

        axios.get('https://randomuser.me/api')
            .then(res => dispatch(getSingleUserSuccess(res.data)))
            .catch(error => dispatch(getSingleUserFailure(error)))
    }
}