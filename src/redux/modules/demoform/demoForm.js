import options from './options'
import fetch from 'node-fetch'

// INITIAL STATE
const initialState = {
    options: null,
    isLoading: true,
    values: {},
    error: null,
    submitSuccess: null,
}

// ACTIONS
const GET_OPTIONS_BEGIN = 'GET_OPTIONS_BEGIN'
const GET_OPTIONS_SUCCESS = 'GET_OPTIONS_SUCCESS'
const GET_OPTIONS_ERROR = 'GET_OPTIONS_ERROR'
const SUBMIT_FORM_BEGIN = 'SUBMIT_FORM_BEGIN'
const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS'
const SUBMIT_FORM_ERROR = 'SUBMIT_FORM_ERROR'

// ACTION CREATORS
export const getOptionsBegin = () => {
    return {
        type: GET_OPTIONS_BEGIN,
    }
}

export const getOptionsSuccess = options => {
    return {
        type: GET_OPTIONS_SUCCESS,
        options,
    }
}

export const getOptionsError = error => {
    return {
        type: GET_OPTIONS_ERROR,
        error,
    }
}

export const submitFormBegin = () => {
    return {
        type: SUBMIT_FORM_BEGIN,
    }
}

export const submitFormSuccess = (values, isSuccessful) => {
    return {
        type: SUBMIT_FORM_SUCCESS,
        values,
        submitSuccess: isSuccessful,
    }
}

export const submitFormError = error => {
    return {
        type: SUBMIT_FORM_ERROR,
        error,
    }
}

// REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_OPTIONS_BEGIN:
            return {
                ...state,
                isLoading: true,
            }

        case GET_OPTIONS_SUCCESS:
            return {
                ...state,
                options: action.options,
                isLoading: false,
            }
        case GET_OPTIONS_ERROR:
            return {
                ...state,
                isLoading: false,
            }
        case SUBMIT_FORM_BEGIN:
            return {
                ...state,
                isLoading: true,
            }

        case SUBMIT_FORM_SUCCESS:
            console.log(action)
            return {
                ...state,
                values: action.values,
                submitSuccess: action.submitSuccess,
                isLoading: false,
            }
        case SUBMIT_FORM_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            }

        default:
            return state
    }
}

/**
 * Grabs all the available form options. Typically all options should be generated dynamically and hence fetched from another server or database. For simplicity sake, we will just create mock data and pretend like we did a node fetch.
 * @param {} dispatch
 */
export const getOptions = dispatch => {
    dispatch(getOptionsBegin())
    try {
        dispatch(getOptionsSuccess(options))
    } catch (e) {
        dispatch(getOptionsError(e))
    }
}

/**
 * Submit all form values to external server
 *
 * @param {object} values - all form values
 */
export const submitForm = (host, values) => async dispatch => {
    dispatch(submitFormBegin())
    try {
        let request = await fetch(host, {
            method: 'post',
            body: JSON.stringify(values),
        })
        let body = await request.json()
        dispatch(submitFormSuccess(values, body.status === 'success'))
    } catch (error) {
        dispatch(submitFormError(error))
        alert('Error submitting the form')
    }
}
