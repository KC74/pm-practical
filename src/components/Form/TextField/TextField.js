import React from 'react'
import { Field } from 'redux-form'
import '../styles.css'

const TextField = ({ name, component, placeholder, isRequired, label }) => {
    return (
        <div>
            <label>
                {label}
                {isRequired && <span className="required-field">*</span>}
            </label>
            <div>
                <Field
                    name={name}
                    component="input"
                    type="text"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default TextField
