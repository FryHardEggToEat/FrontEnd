import React, {Component} from 'react'

class TimeTable extends Component {
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
                <div class="ui four stackable cards">

                </div>
            </div>
        )
    }
}

export default TimeTable