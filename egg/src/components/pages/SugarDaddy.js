import React from 'react'
import { Component } from 'react'
import Divider from './Divider'
/* const SugarDaddy = () => {
    return (
        <div>hi</div>
    )
}*/


class SugarDaddy extends Component {
    render() {
        return (
            <div>
                <div class="ui container">
                    <div class="ui header">
                        <h1>想要贊助</h1>
                    </div>
                    
                    <div class="ui placeholder segment">
                        
                            <div class="column">
                            <div class="ui form">
                                <div class="field">
                                <label>Username</label>
                                    <div class="ui left icon input">
                                        <input type="text" placeholder="Username"/>
                                        <i class="user icon"></i>
                                    </div>
                                </div>
                                
                                <div class="ui blue submit button">Login</div>
                            </div>
                            </div>                        
                    </div>
                    <Divider icon="dollar icon" description="目前總贊助" />
                    <h2>TW＄：10000 元</h2>
                    <Divider icon="gem outline icon" description="最新贊助" />
                
                    <div class="ui one cards">
                    <div class="red card">
                        <div class="content">
                        <div class="header">陳先生</div>
                        <div class="meta">$700</div>
                        </div>
                    </div>
                    <div class="orange card">
                        <div class="content">
                        <div class="header">Apple</div>
                        <div class="meta">$50</div>
                        </div>
                    </div>
                    <div class="yellow card">
                        <div class="content">
                        <div class="header">昶劭</div>
                        <div class="meta">$600</div>
                        </div>
                    </div>
                    <div class="green card">
                        <div class="content">
                        <div class="header">Elliot Fu</div>
                        <div class="meta">$1000</div>
                        </div>
                    </div>
                    
                    <div class="blue card">
                        <div class="content">
                        <div class="header">Veronika Ossi</div>
                        <div class="meta">$5000</div>
                        </div>
                    </div>
                    <div class="purple card">
                        <div class="content">
                        <div class="header">Ian</div>
                        <div class="meta">$666</div>
                        </div>
                    </div>
                    <div class="red card">
                        <div class="content">
                        <div class="header">louis</div>
                        <div class="meta">$5000</div>
                        </div>
                    </div>
                    <div class="orange card">
                        <div class="content">
                        <div class="header">Mr.sugar</div>
                        <div class="meta">$10000</div>
                        </div>
                    </div>
                    <div class="yellow card">
                        <div class="content">
                        <div class="header">🌈</div>
                        <div class="meta">$200</div>
                        </div>
                    </div>
                    <div class="green card">
                        <div class="content">
                        <div class="header">Egg</div>
                        <div class="meta">$2000</div>
                        </div>
                    </div>

                    </div>
                    
                </div>
            </div>
            
        )
    }
}

/*

                    <ul class="ui list">
                        <li>陳先生</li>
                        <li>Chunghwa Telecom</li>
                        <li>昶劭</li>
                        <li>louis</li>
                        <li>Ian</li>
                        <li>Mr.sugar</li>
                        <li>AIOT</li>
                        <li>🌈</li>
                        <li>英弘</li>
                        <li>王小姐</li>
                        <li>等你來挑戰</li>
                        <li>GreenTea</li>
                        <li>Apple</li>
                        <li>666</li>
                        <li>翔平</li>
                        <li>Ms.Rabbit</li>
                        <li>軟硬兼濕</li>
                        <li>大谷</li>
                        <li>Egg</li>
                        <li>Daddy</li>
                    </ul>
*/
export default SugarDaddy
