export function deposit(amount){
    return {type:"deposit", payload:amount}
}

export const withdraw = (amount) =>{
    return {type:"withdraw", payload:amount}
}

export const nameUpdate = (name) =>{
    return {type:"nameUpdate", payload:name}
}

export const mobileUpdate = (mobileNum) =>{
    return {type:"updateMobile", payload:mobileNum}
}

export const reset = () =>{
    return {type:"reset"}
}

export const transactionFn = (amount) =>{
    return {type:"ADD", payload:{amount:amount, date:new Date(), type:"Credit"}}
}


export const addTodo = (todo) =>{
    return {type:"ADD_TODO",payload:todo}
}

export const editTodo = (todo) =>{
    return {type:"EDIT_TODO",payload:todo}
}

export const deleteTodo = (id) =>{
    return {type:"DELETE_TODO",payload:id}
}