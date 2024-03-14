import {configureStore, createSlice} from "@reduxjs/toolkit";
import user from './store/userSlice.js'


let stock = createSlice({
    name : 'stock',
    initialState : [7,8,9]
})

// Cart페이지에서 + 버튼 만들고
// + 버튼 클릭 시 해당 상품의 count +1

//상세페이지 주문하기 버튼 클릭 시 새로운 상품이 state 추가되는 기능


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
    ],
    reducers : {
        addCount(state, action) {
            let num = state.findIndex((a) => {
                return a.id === action.payload
            })
            state[num].count ++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})


export  default  configureStore({
    reducer:{
        user : user.reducer,
        cart : cart.reducer,
        stock : stock.reducer

    }
})

export let {addCount,addItem} = cart.actions