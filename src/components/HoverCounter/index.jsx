import React from 'react'
import IncrementFunctionality from '../../HOF/IncrementFun/IncrementFunctionality'

const HoverCounter = (props) =>{

    return (
        <div>
            <button onMouseEnter={props.handleIncrement}>Hover me {props.count} times ❤️💖🤦‍♂️</button>
        </div>
    )

}

export default IncrementFunctionality(HoverCounter,5)