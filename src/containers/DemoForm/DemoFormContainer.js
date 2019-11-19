import React, { Component } from 'react'
import DemoForm from './DemoForm'
import { getOptions, submitForm } from '../../redux/modules/demoform/demoForm'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import { CircularProgress } from '@material-ui/core'

/**
 * DemoFormContainer
 *
 * This container will handle all of the logic of the Demoform.
 */
class DemoFormContainer extends Component {
    componentDidMount() {
        // Fetch our form options from the dummy data
        this.props.dispatch(getOptions)
    }

    handleSubmit = () => {
        const { reason, fullName, workEmail, phone } = this.props
        this.props.dispatch(submitForm({ reason, fullName, workEmail, phone }))
    }

    render() {
        const { isLoading, options, submitSuccess } = this.props
        return isLoading ? (
            <div>
                <CircularProgress />
                <p>Loading...</p>
            </div>
        ) : (
            <div className="demoform-container">
                {submitSuccess ? (
                    <p>Successfully Submitted!</p>
                ) : (
                    <DemoForm
                        {...this.props}
                        handleSubmit={this.handleSubmit}
                        options={options}
                    />
                )}
            </div>
        )
    }
}

// Redux form HOC
const demoForm = reduxForm({
    form: 'demoForm',
})(DemoFormContainer)

// Connect our store
export default connect(store => {
    // Grab our values
    const values = formValueSelector('demoForm')
    const { reason, fullName, workEmail, phone } = values(
        store,
        'reason',
        'fullName',
        'workEmail',
        'phone'
    )
    const { isLoading, options, submitSuccess } = store.demoFormOptions
    const { demoForm } = store.form

    return {
        isLoading,
        options,
        reason,
        fullName,
        workEmail,
        phone,
        demoForm,
        submitSuccess,
    }
})(demoForm)
