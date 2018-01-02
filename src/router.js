import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import News from './components/News/News';

export default (
    <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/projects' component={ Projects } />
        <Route path='/news' component={ News } />
        <Route path='/about' component={ About } />
    </Switch>
)