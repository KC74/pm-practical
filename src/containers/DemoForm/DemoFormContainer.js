import React, { Component } from 'react'
import DemoForm from './DemoForm'
import { getOptions } from '../../redux/modules/demoform/demoForm'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

/**
 * DemoFormContainer
 *
 * This container will handle all of the logic of the Demoform.
 */
class DemoFormContainer extends Component {
    componentDidMount() {
        // Fetch our form options from the dummy data
        getOptions(this.props.dispatch)
    }

    render() {
        const { isLoading, options } = this.props
        return isLoading ? (
            <p>Loading...</p>
        ) : (
            <div className="demoform-container">
                <DemoForm {...this.props} options={options} />
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
    const { isLoading, options } = store.demoFormOptions

    return {
        isLoading,
        options,
        reason,
        fullName,
        workEmail,
        phone,
    }
})(demoForm)
