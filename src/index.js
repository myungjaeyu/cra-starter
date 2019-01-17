import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'unstated'

ReactDOM.render(
    <Provider>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
, document.getElementById('root'))

serviceWorker.unregister()
