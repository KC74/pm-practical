import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import demoFormOptionsReducer from './modules/demoform/demoForm'

export default combineReducers({
    form: formReducer,
    demoFormOptions: demoFormOptionsReducer,
})
