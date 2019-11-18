import React from 'react'
import { Field } from 'redux-form'
import '../styles.css'

const EmailField = ({ label, isRequired, placeholder, name }) => {
    return (
        <div className="demoform-email">
            <label>
                {label}
                {isRequired && <span className="required-field">*</span>}
            </label>
            <div>
                <Field
                    name={name}
                    component="input"
                    type="email"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default EmailField
