import React, { useState } from "react";

const IncrementFunctionality = (OriginalComponent, number) =>{

    const NewComponent = (props) =>{
        const [count, setcount] = useState(0)

        const handleIncrement = () =>{
            setcount(prevcount => prevcount+number)
        }

        return (
            <OriginalComponent count={count} handleIncrement={handleIncrement} {...props}/>
        )
    }
    return NewComponent
 
}

export default IncrementFunctionality