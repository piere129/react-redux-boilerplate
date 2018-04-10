import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';



function startApp() {
    ReactDOM.render(

       <App>
          <Routes/> 
        </App>,
        document.getElementById('root')
    );
}

startApp();