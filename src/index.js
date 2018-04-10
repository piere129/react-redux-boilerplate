import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Routes from './routes';


function startApp() {
    ReactDOM.render(

       <App>
          <Routes/> 
        </App>,
        document.getElementById('root')
    );
}

startApp();