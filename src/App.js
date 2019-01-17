import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import './App.scss'

import Main from './pages/Main'
import Sub from './pages/Sub'

class App extends Component {
    render() {
        return (
            <div className='App'>

                <span className='App__Title'>
                    cra-starter
                </span>

                <Switch>
                    <Route exact path='/' component={ Main } />
                    <Route exact path='/sub/:no' component={ Sub } />
                    <Redirect to='/'/>
                </Switch>

            </div>
        )
    }
}

export default withRouter(App)