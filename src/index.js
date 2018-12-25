import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App'
import './theme.scss'
import 'bootstrap/dist/css/bootstrap.css';


import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { Provider} from 'react-redux';
import {createModalReducer} from './store/reducers/ModalReducer'
import {ideaReducer} from './store/reducers/IdeaReducer'


const reducers = {
    ideas: ideaReducer,
    createIdeaModal: createModalReducer,
    form: formReducer    // <---- Mounted at 'form'. See note below.
  }

const reducer = combineReducers(reducers);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
