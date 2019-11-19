import React from 'react'
import { Field } from 'redux-form'
import { renderSelectField } from '../RenderField/RenderField'
import '../styles.css'

const SelectField = props => {
    const { options } = props
    return (
        <div className="selectfield container">
            <Field component={renderSelectField} type="select" {...props}>
                <option key={0} value="select">
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
    )
}

export default SelectField
