import React from 'react'
import { Field } from 'redux-form'
import { renderInputField } from '../RenderField/RenderField'
import '../styles.css'

const NumberField = props => {
    return (
        <div className="numberfield container">
            <Field component={renderInputField} type="number" {...props} />
        </div>
    )
}

export default NumberField
