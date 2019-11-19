import React from 'react'
/**
 * Rendered field component with validation
 */
export const renderInputField = ({
    input,
    label,
    type,
    isRequired,
    meta: { touched, error, warning },
    placeholder,
}) => {
    // default border styles
    let style = {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
    }

    if (touched && (error || warning)) {
        // error and warning styles
        style = {
            borderColor: 'red',
        }
    } else if (touched) {
        // validated styles
        style = {
            borderColor: 'green',
        }
    }

    return (
        <div className="demoform-input container">
            <label className="demoform-input label">
                {label}
                {isRequired && <span className="required-field">*</span>}
            </label>
            <div className="demoform-input wrapper">
                <input
                    className="demoform-input field"
                    style={style}
                    {...input}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
        </div>
    )
}

/**
 * Renders a select field with validation
 */
export const renderSelectField = ({
    input,
    label,
    isRequired,
    meta: { touched, error, warning },
    children,
}) => {
    // default border styles
    let style = {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
    }

    if (touched && (error || warning)) {
        // error and warning styles
        style = {
            borderColor: 'red',
        }
    } else if (touched) {
        // validated styles
        style = {
            borderColor: 'green',
        }
    }

    return (
        <div className="demoform-input container">
            <label className="demoform-label">
                {label}
                {isRequired && <span className="required-field">*</span>}
            </label>
            <div className="demoform-input wrapper">
                <select style={style} {...input}>
                    {children}
                </select>
            </div>
        </div>
    )
}
