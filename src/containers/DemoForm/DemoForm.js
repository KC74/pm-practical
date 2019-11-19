import React from 'react'
import TextField from '../../components/Form/TextField'
import SelectField from '../../components/Form/SelectField'
import EmailField from '../../components/Form/EmailField'
import NumberField from '../../components/Form/NumberField'
import {
    number,
    required,
    email,
    text,
    select,
} from '../../components/Form/formFieldValidations.js'
import './styles.css'

/**
 *
 * @param {*} props
 */
const DemoForm = props => {
    const { handleSubmit, pristine, reset, submitting, demoForm } = props
    const { reasons } = props.options
    return (
        <div className="demoform">
            <form className="demoform">
                <SelectField
                    name="reason"
                    label="What brought you here today?"
                    options={reasons}
                    isRequired={true}
                    validate={[required, select]}
                />
                <TextField
                    name="fullName"
                    label="Full Name"
                    isRequired={true}
                    validate={[required, text]}
                />
                <EmailField
                    label="Work email"
                    isRequired={true}
                    name="workEmail"
                    validate={[email, required]}
                />
                <NumberField
                    label="Phone"
                    isRequired={true}
                    name="phone"
                    validate={[required, number]}
                />
                <div>
                    <button
                        type="button"
                        disabled={
                            (demoForm && demoForm.syncErrors) || pristine
                                ? true
                                : submitting
                        }
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DemoForm
