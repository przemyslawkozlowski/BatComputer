import React, { Component } from 'react';
import Map from '../Map/Map.js';
import {NavLink, Route, HashRouter, Router, Switch} from 'react-router-dom';
import './Main.scss';




class SlideArrows extends Component {
    render() {
        return (
            <div>
                <NavLink to="/8" activeClassName={'active'}>
                    <div className={'leftslide'}> &lang; </div>
                </NavLink>
                <NavLink to="/10" activeClassName={'active'}>
                    <div className={'rightslide'}> &rang; </div>
                </NavLink>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div className={'show'}>
                <SlideArrows/>
            </div>
        )
    }
}

export default Main;