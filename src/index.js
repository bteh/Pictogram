import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.css';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './components/App'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
