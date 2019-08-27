import React from 'react'
import { Component } from 'react'
import { Route } from 'react-router-dom'

import Menu from './Menu'
import Footer from './Footer'
import Home from './pages/Home'
import SugarDaddy from './pages/SugarDaddy'
import SugarBaby from './pages/SugarBaby'
import TimeTable from './pages/TimeTable'

import './css/app.css'

class App extends Component {
    render() {
        return (
            <div class="Site">
                <Menu/>
                <div class="container Site-content">
                    <Route path="/" exact component={Home} />
                    <Route path="/sugardaddy" component={SugarDaddy} />
                    <Route path="/sugarbaby" component={SugarBaby} />
                    <Route path="/timetable" component={TimeTable} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App