import React from 'react'
import { Field } from 'redux-form'
import { renderInputField } from '../RenderField/RenderField'
import '../styles.css'

const TextField = props => {
    return (
        <div className="textfield container">
            <Field component={renderInputField} type="text" {...props} />
        </div>
    )
}

export default TextField
