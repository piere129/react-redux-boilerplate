import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Parent from './containers/parent/parent'
import Counter from './containers/counter/counter';

class AppRouteComponent extends Component {
    render() {
        return (
                <Router>
                <Switch>
                    <Parent>
                        <Switch>
                             <Route exact path="/" component={Counter} />    
                        </Switch>
                    </Parent>
                </Switch>
                </Router>
        );
    }
}

const Routes = connect(({ }) => ({ }))(AppRouteComponent);

export default Routes;
