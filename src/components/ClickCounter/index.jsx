import React from 'react'
import IncrementFunctionality from '../../HOF/IncrementFun/IncrementFunctionality'

const ClickCounter = (props) =>{

    return (
        <div>
            <button onClick={props.handleIncrement}>{props.name}  Button clicked {props.count} times</button>
        </div>
    )

}

export default IncrementFunctionality(ClickCounter, 10)