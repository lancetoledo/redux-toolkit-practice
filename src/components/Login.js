import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user' 

export default function Login() {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick= {()=>{dispatch(login({name:"Lance", age:23, email: "lance@cleverprogrammer.com"}))}}>Login</button>
            <button onClick = {() => {dispatch(logout())}}>Logout</button>
        </div>
    )
}
