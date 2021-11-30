import React from 'react'
//Used to GRAB a value from the state and display it in the component
import { useSelector } from 'react-redux'

export default function Profile() {


    const user = useSelector((state)=> state.user.value)
    const themeColor = useSelector((state)=> state.theme.value )


    return (
        <div style= {{color:themeColor}}>
            <h1>Profile page</h1>
            <p>Name: {user.name} </p>
            <p>Age: {user.age} </p>
            <p>Email: {user.email}</p>
        </div>
    )
}


