import options from './options'

// INITIAL STATE
const initialState = {
    options: null,
    isLoading: true,
}

// ACTIONS
const GET_OPTIONS_BEGIN = 'GET_OPTIONS_BEGIN'
const GET_OPTIONS_SUCCESS = 'GET_OPTIONS_SUCCESS'
const GET_OPTIONS_ERROR = 'GET_OPTIONS_ERROR'

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
