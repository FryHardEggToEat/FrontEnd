import React from 'react'
import { Link } from 'react-router-dom'

// TODO: active button would change color to red
const Menu = props => {
    return (
        <div class="ui top teal inverted stackable menu huge">
            <Link class="item" to='/'>
                <div>
                    <i class="sign language icon"></i>
                    &nbsp;Street Artist World&nbsp;
                </div>
            </Link>
            <div class="right menu">
                <Link class="item" to='/'>首頁</Link>
                <Link class="item" to='/sugardaddy'>贊助者</Link>
                <Link class="item" to='/sugarbaby'>街頭藝人</Link>
            </div>
        </div>
    )
}

export default Menu