//createSlice allows you to create your REDUCER in a easier way
import { createSlice } from "@reduxjs/toolkit"


export const themeSlice = createSlice({
    //passs the name of the slice which is the name of your state
    name: "theme",
    initialState: {value: ""},
    
    reducers: {
        //The different functions we might want to use to change our state
        changeColor: (state, action) => {
            state.value = action.payload
        },
       
    },
})

//Export your actions
export const { changeColor } = themeSlice.actions

//Exporting to have this information elsewhere
export default themeSlice.reducer;


