import React from 'react'
import { Field } from 'redux-form'
import { renderInputField } from '../RenderField/RenderField'
import '../styles.css'

const EmailField = props => {
    return (
        <div className="emailfield container">
            <Field component={renderInputField} type="email" {...props} />
        </div>
    )
}

export default EmailField
