import React from 'react'
import { Field } from 'redux-form'
import '../styles.css'

const SelectField = ({ name, options, label, isRequired, multiSelect }) => {
    return (
        <div>
            <label className="demoform-label">
                {label}
                {isRequired && <span className="required-field">*</span>}
            </label>
            <div>
                <Field
                    name={name}
                    component="select"
                    type={multiSelect ? 'select-multi' : 'select'}
                >
                    <option key={0} value={null}>
                        - Select -
                    </option>
                    {options.map((option, key) => {
                        return (
                            <option key={key + 1} value={option}>
                                {option}
                            </option>
                        )
                    })}
                </Field>
            </div>
        </div>
    )
}

export default SelectField
