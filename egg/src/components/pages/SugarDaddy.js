import React from 'react'
import { Component } from 'react'
import Divider from './Divider'
/* const SugarDaddy = () => {
    return (
        <div>hi</div>
    )
}*/

class SugarDaddy extends Component { 
    constructor(props){
        super(props);
        this.state = {
            details: { name: '', amount: '', totalamount: '' }
        }
        this.url = 'http://192.168.43.45:5000'
        this.onNameChange = this.onNameChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.donateAction = this.donateAction.bind(this);
    }

    componentDidMount(){
        fetch(this.url + '/total')
        .then(res=>res.json())
        .then(data => {
            this.setState(function(state){
                return { 
                    details: Object.assign({}, 
                      state.details, {
                      totalamount: data 
                    })
                }
            })
        })
    }

    onNameChange(event) {
        const value = event.target.value

        this.setState(function(state){
            return { 
                details: Object.assign({}, 
                  state.details, {
                  name: value 
                })
            }
        })
    }
    onAmountChange(event) {
        const value = event.target.value

        this.setState(function(state){
            return { 
                details: Object.assign({}, 
                  state.details, {
                  amount: value 
                })
            }
        })
    }
    donateAction() {
        var username = this.state.details.name
        var amount = this.state.details.amount
        fetch(this.url+'/post/new_daddy', {
            method: 'POST',
            headers: {'Content-Type': 'text/plain',},
            body: username +' '+amount
        })
        this.setState(function(state){
            return { 
                details: Object.assign({}, 
                  state.details, {
                  amount: '',
                  name: ''
                })
            }
        })
        fetch(this.url + '/total')
        .then(res=>res.json())
        .then(data => {
            this.setState(function(state){
                return { 
                    details: Object.assign({}, 
                      state.details, {
                      totalamount: data 
                    })
                }
            })
        })
    }

    render() {
        return (
            <div>
                <div class="ui container">
                    <div class="ui header">
                        <h1>我要贊助</h1>
                    </div>
                    
                    <div class="ui placeholder segment">
                        
                            <div class="column">
                            <div class="ui form">
                                <div class="field">
                                <label>帳號</label>
                                    <div class="ui left icon input">
                                        <input type="text" placeholder="帳號" onChange={this.onNameChange} value={this.state.details.name}/>
                                        <i class="user icon"></i>
                                    </div>
                                </div>
                                <div class="field">
                                    <label>贊助金額</label>
                                        <div class="ui left icon input">
                                            <input type="Digit" placeholder="贊助金額" onChange={this.onAmountChange} value={this.state.details.amount}/>
                                            <i class="dollar sign icon"></i>
                                    </div>
                                </div>
                                <button onClick = {this.donateAction} class="ui blue submit button">贊助</button>
                            </div>
                            </div>                        
                    </div>
                    <Divider icon="dollar icon" description="目前總贊助" />
                    <h2>TW＄：{this.state.details.totalamount} 元</h2>
                    
                
                    
                </div>
            </div>
            
        )
    }
}

/*
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
*/
export default SugarDaddy
