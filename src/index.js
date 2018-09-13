import React, { Component } from 'react';
import { render } from 'react-dom';
import {Link, NavLink, Route, HashRouter, Switch, Router} from 'react-router-dom';
import './app.scss';

const activeLinkStyle = {
    height: '100wh',
    width: '100vw',
    backgroundColor: 'red'
};

const Navigation = () => {
    return (
        <div className={'container'}>
            <div className={'row1'}>
                <NavLink exact to="/1"  className={'panel nr1 flux'}>
                    Panel1
                </NavLink>
                <NavLink to="/2"  className={'panel nr2 flux'}>
                    Panel2
                </NavLink>
                <NavLink to="/3"  className={'panel nr3 flux'}>
                    Panel3
                </NavLink>
                <NavLink to="/4"  className={'panel nr4 flux'}>
                    Panel4
                </NavLink>
            </div>
            <div className={'row2'}>
                <NavLink exact to="/5"  className={'panel nr5 flux'}>
                    Panel5
                </NavLink>
                <NavLink to="/6"  className={'panel nr6 flux'}>
                    Panel6
                </NavLink>
                <NavLink to="/7"  className={'panel nr7 flux'}>
                    Panel7
                </NavLink>
            </div>
            <div className={'row3'}>
                <NavLink exact to="/8"  className={'panel nr8 flux'}>
                    Panel8
                </NavLink>
                <NavLink to="/main"  className={'panel main flux'}>
                    {Main}
                </NavLink>
                <NavLink to="/10"  className={'panel nr10 flux'}>
                    Panel10
                </NavLink>
            </div>
        </div>
    )
};

const Main = () => {
    return (
        <div className={"activ"}>
            <h1>Welcome!</h1>
        </div>
    )
};


class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                <Navigation/>
                    <Switch>
                        <Route path="/main" component={Main} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

render(
    <App />,
    document.getElementById('app')
);