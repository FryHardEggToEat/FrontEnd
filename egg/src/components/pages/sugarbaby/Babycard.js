import React from 'react'

const BabyCard = props => {
    return (
        <div class="ui card">
            <div class="image">
                <img src={props.img} />
            </div>
            <div class="content">
                <a class="header">{props.name}</a>
                <div class="meta">
                <span class="date">Joined in {props.since}</span>
                </div>
                <div class="description">
                {props.description}
                </div>
            </div>
            <div class="extra content">
                <a>
                <i class="user icon"></i>
                    人氣： {props.fans} 
                </a>
                <br/>
                <a>
                <i class="dollar sign  icon"></i>
                    錢： {props.money} 
                </a>
            </div>
        </div>
    )
}

export default BabyCard