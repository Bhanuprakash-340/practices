import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { deposit, withdraw,nameUpdate,mobileUpdate, reset, transactionFn} from '../../Redux/action'

const FormRedux = () => {
    const [userAmount, setUserAmount] = useState('')
    const [username, setUsername] = useState("")
    const [mobileNum, setMobileNum] = useState("")

    let dispatch = useDispatch()

    const handleuserInput = (event) =>{
        setUserAmount(event.target.value)
    }

    const handleNameField = (event) =>{
        setUsername(event.target.value)
    }

    const handleUserNum = (event) =>{
        setMobileNum(event.target.value)
    }

    const handleDeposit = () =>{
        dispatch(deposit(userAmount));
        dispatch(transactionFn(userAmount))
        setUserAmount("")
    }

    const handleWithdraw = () =>{
        dispatch(withdraw(userAmount));
        setUserAmount("")
    }

    const handleNameButton = () =>{
        dispatch(nameUpdate(username));
        setUsername("")
    }

    const handleMobileBtn = () =>{
        dispatch(mobileUpdate(mobileNum));
        setMobileNum("")
    }

    const handleReset = () =>{
        dispatch(reset())
    }


  return (
    <div>
        <h1 className='form-heading'>Form</h1>
        <div>
            <input type="text" placeholder='Enter amount' value={userAmount} className='input-fields' onChange={handleuserInput}/>
            <button className='primary-button' onClick={handleDeposit}>Deposit</button>
            <button className='red-button' onClick={handleWithdraw}>Withdraw</button>
        </div>
        <div>
            <input type="text" placeholder='Enter your name..' className='input-fields' onChange={handleNameField} value={username}/>
            <button className='primary-button' onClick={handleNameButton}>Update</button>
        </div>
        <div>
            <input type="tel" placeholder='Enter your mobile number..' className='input-fields' onChange={handleUserNum} value={mobileNum}/>
            <button className='primary-button' onClick={handleMobileBtn}>Update</button>
        </div>
        <button className='red-button' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FormRedux