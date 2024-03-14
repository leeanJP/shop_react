import {createSlice} from "@reduxjs/toolkit";
let user = createSlice({
    name : 'user', //state 이름
    initialState : {name : 'Lee' , age : 20}, //state 기본값
    reducers : {
        changeName(state){
            state.name = 'park'
        },
        increase(state, action){
            state.age += action.payload
        },
    }
})
export let {changeName, increase} = user.actions
export default user