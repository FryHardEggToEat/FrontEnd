import React from 'react'
import { Component } from 'react'
import { Route } from 'react-router-dom'

import Menu from './Menu'
import Footer from './Footer'
import Home from './pages/Home'

import './css/app.css'

class App extends Component {
    render() {
        return (
            <div class="Site">
                <Menu/>
                <div class="container Site-content">
                    <Route path="/" exact component={Home} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App