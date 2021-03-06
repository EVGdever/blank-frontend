import {Provider} from 'react-redux'
import {store} from './redux/store'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)

