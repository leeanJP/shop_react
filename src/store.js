import {configureStore, createSlice} from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user', //state 이름
    initialState : {name : 'Lee' , age : 20}, //state 기본값
    reducers : {
        changeName(state){
            state.name = 'park'
        }
    }
})

let stock = createSlice({
    name : 'stock',
    initialState : [7,8,9]
})

let cart  = createSlice({
    name : 'cart',
    initialState : [
        {
            id : 0,
            title : "Gemma sweatshirt",
            content : "오버 아웃핏 스웨트셔츠",
            count : 2,
            price : 120000
        },
        {
            id : 2,
            title : "TRS Tag varsity jacket 01",
            content : "세미 오버사이즈 핏 자켓",
            count : 1,
            price : 479000
        }
    ]
})


export  default  configureStore({
    reducer:{
        user : user.reducer,
        cart : cart.reducer,
        stock : stock.reducer

    }
})

export let {changeName} = user.actions