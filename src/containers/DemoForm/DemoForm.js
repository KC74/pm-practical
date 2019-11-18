import React from 'react'
import TextField from '../../components/Form/TextField'
import SelectField from '../../components/Form/SelectField'
import EmailField from '../../components/Form/EmailField'
import NumberField from '../../components/Form/NumberField'
import './styles.css'

/**
 *
 * @param {*} props
 */
const DemoForm = props => {
    const { fullName, handleSubmit, pristine, reset, submitting } = props

    const { reasons } = props.options

    return (
        <div className="demoform">
            <form onSubmit={handleSubmit}>
                <SelectField
                    name="reason"
                    label="What brought you here today?"
                    options={reasons}
                    isRequired={true}
                />
                <TextField
                    name="fullName"
                    label="Full Name"
                    isRequired={true}
                />
                <EmailField
                    label="Work email"
                    isRequired={true}
                    name="workEmail"
                />
                <NumberField label="Phone" isRequired={true} name="phone" />
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit {fullName}
                    </button>
                    <button
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Clear Values
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DemoForm
