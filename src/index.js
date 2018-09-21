import React, { Component } from 'react';
import { render } from 'react-dom';
import {NavLink, Route, HashRouter, Router, Switch} from 'react-router-dom';
import './index.scss';
import Main from './layouts/Main/Main.js';



const Home = () => {
    return (
        <HashRouter>
            <div>
                <Navigation/>
                <div>
                    <Route path="/1" component={Main}/>
                    <Route path="/2" component={Main}/>
                    <Route path="/3" component={Main}/>
                    <Route path="/4" component={Main}/>
                    <Route path="/5" component={Main}/>
                    <Route path="/6" component={Main}/>
                    <Route path="/7" component={Main}/>
                    <Route path="/8" component={Main}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/10" component={Main}/>
                </div>
            </div>
        </HashRouter>
    )
};


const Navigation = () => {
    return (
        <div className={'container'}>
            <div className={'row1'}>
                <NavLink to="/1"  activeClassName={'active'} className={'panel nr1 flux'}>
                    1
                </NavLink>
                <NavLink to="/2" activeClassName={'active'} className={'panel nr2 flux'}>
                    2
                </NavLink>
                <NavLink to="/3" activeClassName={'active'} className={'panel nr3 flux'}>
                    3
                </NavLink>
                <NavLink to="/4" activeClassName={'active'} className={'panel nr4 flux'}>
                    4
                </NavLink>
            </div>
            <div className={'row2'}>
                <NavLink to="/5" activeClassName={'active'} className={'panel nr5 flux'}>
                    5
                </NavLink>
                <NavLink to="/6" activeClassName={'active'} className={'panel nr6 flux'}>
                    6
                </NavLink>
                <NavLink to="/7" activeClassName={'active'} className={'panel nr7 flux'}>
                    7
                </NavLink>
            </div>
            <div className={'row3'}>
                <NavLink  to="/8" activeClassName={'active'} className={'panel nr8 flux'}>
                    8
                </NavLink>
                <NavLink to="/main" activeClassName={'active'} className={'panel main flux'}>
                    9
                </NavLink>
                <NavLink to="/10" activeClassName={'active'} className={'panel nr10 flux'}>
                    10
                </NavLink>
            </div>
        </div>
    )
};




class App extends Component {
    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('app')
);
