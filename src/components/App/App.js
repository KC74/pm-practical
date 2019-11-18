import React from 'react'
import Layout from '../Layout/'
import { Provider } from 'react-redux'
import configStore from '../../redux/store'
import DemoForm from '../../containers/DemoForm'
import './App.css'

/**
 * Prizm Media Practical Test App
 */

// INITIALIZE STORE
const store = configStore()

class PrizmMediaApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <DemoForm />
                </Layout>
            </Provider>
        )
    }
}

export default PrizmMediaApp
