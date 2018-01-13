import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import News from './components/News/News';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';

export default (
    <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/login' component={ Login } />
        <Route path='/projects' component={ Projects } />
        <Route path='/news' component={ News } />
        <Route path='/about' component={ About } />
        <Route path='/admin' component={ Admin } />
    </Switch>
)