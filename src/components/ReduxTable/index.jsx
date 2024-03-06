import React from 'react'
import {useSelector} from 'react-redux'

const ReduxTable = () => {

   let data =  useSelector((state)=>{
    return state
    })

    // console.log(data.account)
    // console.log(data.transactions)
  return (
    <div>
        <h1 className='form-heading'>Account Details</h1>
        <table>
            <thead>
                <tr>
                   <th>Balance</th>
                    <th>Username</th>
                    <th>Mobile Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.account.balance}</td>
                    <td>{data.account.fullName}</td>
                    <td>{data.account.mobile}</td>
                </tr>
            </tbody>
        </table>
        <h3 className='form-heading'>Transactions</h3>
        <table>
            <thead>
                <tr>
                   <th>Amount</th>
                    <th>Date</th>
                    <th>Transaction Type</th>
                </tr>
            </thead>
            <tbody>
                    {data.transactions.map(each =>(
                        <tr>
                            <td>{each.amount}</td>
                            <td>{each.date.toString()}</td>
                            <td>{each.type}</td>
                        </tr>
                    ))}

            </tbody>
        </table>
    </div>
  )
}

export default ReduxTable