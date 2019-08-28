import React, {Component} from 'react'

import Divider from './Divider'

class TimeTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            details: { name: '', place: '', startTime: '', endTime: ''}
        }
        this.url = 'http://192.168.43.45:5000'
        this.onNameChange = this.onNameChange.bind(this);
        this.onPlaceChange = this.onPlaceChange.bind(this);
        this.onStartTimeChange = this.onStartTimeChange.bind(this);
        this.onEndTimeChange = this.onEndTimeChange.bind(this);
        this.eventAction = this.eventAction.bind(this);
    }

    /*
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
    */
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
    onPlaceChange(event) {
        const value = event.target.value

        this.setState(function(state){
            return { 
                details: Object.assign({}, 
                  state.details, {
                  place: value 
                })
            }
        })
    }
    onStartTimeChange(event) {
        const value = event.target.value

        this.setState(function(state){
            return { 
                details: Object.assign({}, 
                  state.details, {
                  startTime: value 
                })
            }
        })
    }
    onEndTimeChange(event) {
        const value = event.target.value

        this.setState(function(state){
            return { 
                details: Object.assign({}, 
                  state.details, {
                  endTime: value 
                })
            }
        })
    }
    
    eventAction() {
        var username = this.state.details.name
        var place = this.state.details.place
        var startTime = this.state.details.startTime
        var endTime = this.state.details.endTime
        fetch(this.url+'/post/new_event', {
            method: 'POST',
            headers: {'Content-Type': 'text/plain',},
            body: username +' '+place+' '+startTime+' '+endTime
        })
        this.setState(function(state){
            return { 
                details: Object.assign({}, 
                  state.details, {
                  endTime: '',
                  startTime: '',
                  place: '',
                  name: ''
                })
            }
        })

        /*
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
        */
    }
    
    render() {
        return (
            <div class="ui  container">

                <div class="ui header">
                        <h2>活動搜尋</h2>
                </div>
                
                <div class="ui action input">
                    <input type="text" placeholder="Search..."/>
                    <button class="ui button">Search</button>
                </div>
                
                <Divider icon="rocket icon" description="新增表演" />
                <div class="ui form">
                    <div class="four fields">
                        <div class="field">
                            <label>Artist name</label>
                            <input type="text" placeholder="Name" onChange={this.onNameChange} value={this.state.details.name}/>
                        </div>
                        <div class="field">
                            <label>Acting Place</label>
                            <input type="text" placeholder="Place" onChange={this.onPlaceChange} value={this.state.details.place}/>
                        </div>
                        <div class="field">
                            <label>Start Time</label>
                            <input type="text" placeholder="Start Time(Ex:2019-8-28 10:00:00)" onChange={this.onStartTimeChange} value={this.state.details.startTime}/>
                        </div>
                        <div class="field">
                            <label>End Time</label>
                            <input type="text" placeholder="End Time(Ex:2019-8-28 10:30:00)" onChange={this.onEndTimeChange} value={this.state.details.endTime}/>
                        </div>
                    </div>
                </div>
                <button onClick = {this.eventAction} class="ui blue submit button">送出</button>
            </div>
        )
    }
}

export default TimeTable