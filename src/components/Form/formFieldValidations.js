/**
 * This file contains exports for field level form validations.
 */

// Required field
export const required = value => (value ? undefined : 'Required')

// Numbers only
export const number = value =>
    value && isNaN(Number(value)) ? 'Must be a valid number' : undefined

// Valid email
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

// No default value
export const select = value => {
    if (value === 'select') {
        return 'Required'
    }
    return undefined
}

// No special characters in text field
export const text = value =>
    value && /([^a-zA-Z0 ])/i.test(value) ? 'Invalid name' : undefined
