import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './Home.js';
import City from "./City.js";

ReactDOM.render(
    <div>
      <body>
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/city/:id" component={City} />
            <Route path="*" component={() => <p>Page Not Found</p>}/>
        </Router>
      </body>
    </div>
    ,
    document.getElementById('root')
);

if (module.hot)
    module.hot.accept();
