import React from 'react'
import './styles.css'

/**
 * Layout component
 *
 * This is a dummy component that only deals with the main container and layout of the app.
 */
const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <div style={{ width: '100%' }} className="header">
                This is the header here
            </div>
            {children}
            <div style={{ width: '100%' }} className="footer">
                This is the footer here
            </div>
        </div>
    )
}

export default Layout
