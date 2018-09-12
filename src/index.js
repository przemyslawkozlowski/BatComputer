import React, { Component } from 'react';
import { render } from 'react-dom';
import {Link, NavLink, Route, HashRouter, Switch,} from 'react-router-dom';
import './app.scss';

const activeLinkStyle = {
    fontWeight: 700,
    backgroundColor: 'lightgray'
};

const Navigation = () => {
    return (
        <div className={'container'}>
            <div className={'row1'}>
                <Link exact to="/" activeStyle={activeLinkStyle} className={'panel nr1'}>
                    Panel1
                </Link>
                <Link to="/hello/Jan" activeStyle={activeLinkStyle} className={'panel nr2'}>
                    Panel2
                </Link>
                <Link to="/checkage/50" activeStyle={activeLinkStyle} className={'panel nr3'}>
                    Panel3
                </Link>
                <Link to="/checkage/50" activeStyle={activeLinkStyle} className={'panel nr4'}>
                    Panel4
                </Link>
            </div>
            <div className={'row2'}>
                <Link exact to="/" activeStyle={activeLinkStyle} className={'panel nr5'}>
                    Panel5
                </Link>
                <Link to="/hello/Jan" activeStyle={activeLinkStyle} className={'panel nr6'}>
                    Panel6
                </Link>
                <Link to="/checkage/50" activeStyle={activeLinkStyle} className={'panel nr7'}>
                    Panel7
                </Link>
            </div>
            <div className={'row3'}>
                <Link exact to="/" activeStyle={activeLinkStyle} className={'panel nr8'}>
                    Panel8
                </Link>
                <Link to="/hello/Jan" activeStyle={activeLinkStyle} className={'panel main'}>
                    Main
                </Link>
                <Link to="/checkage/50" activeStyle={activeLinkStyle} className={'panel nr10'}>
                    Panel10
                </Link>
            </div>
        </div>
    )
};

const Main = () => {
    return (
        <h1>Welcome!</h1>
    )
};

const HelloYou = ({ match }) => {
    return (
        <div>
            <h1>Hello, {match.params.name}!</h1>
        </div>
    )
};

const CheckAge = ({ match }) => {
    return (
        <div>
            <h1>{match.params.age >= 18 ? "Pełnoletni" : "Niepełnoletni"}</h1>
            <Link to="/hello/Kuba">Przywitaj się!</Link>
        </div>
    )
};

const FourOhFour = ({ match }) => {
    return (
        <h1>Ups, nie znaleziono widoku o nazwie: {match.params.view}</h1>
    )
};




class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/hello/:name" component={HelloYou} />
                        <Route path="/checkage/:age" component={CheckAge} />
                        <Route path="/:view" component={FourOhFour} />
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