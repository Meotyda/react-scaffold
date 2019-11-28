import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact from="/" to="/example" />
                <Route path="/example" component={null} />
            </Switch>
        );
    }
}
