//createSlice allows you to create your REDUCER in a easier way
import { createSlice } from "@reduxjs/toolkit"

const intialStateValue = { name: "", age: 0, email:"" }
export const userSlice = createSlice({
    //passs the name of the slice which is the name of your state
    name: "user",
    initialState: {value: { name: "", age: 0, email:"" }},
    
    reducers: {
        //The different functions we might want to use to change our state
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = intialStateValue
        }
    },
})

//Export your actions
export const { login, logout } = userSlice.actions

//Exporting to have this information elsewhere
export default userSlice.reducer;


