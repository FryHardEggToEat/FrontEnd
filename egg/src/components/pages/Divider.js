import React from 'react'

const Divider = props => {
    
    return (
        <h4 class="ui horizontal divider header">
        <i class={props.icon}></i>
            {props.description}
        </h4>
    )
}

export default Divider