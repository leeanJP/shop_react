import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeName, increase} from "../store/userSlice.js";
import {addCount} from "../store.js"
import {memo, useEffect, useMemo, useState} from "react";
import axios from "axios";


console.log(1)
axios.get('https://raw.githubusercontent.com/leeanJP/shop_react/master/src/userdata.json')
    .then((a)=> {
        console.log(2)
        return a.data
    })
console.log(3)



function Cart() {
    let dispatch = useDispatch();
    let user = useSelector((state) => {
        return state.user
    })

    //let result =  test(); // Cart가 재렌더 될때마다 실행

    let state = useSelector((state) =>state)
    let [count, setCount] = useState(0);
    let [age, setAge] = useState(20);

    useEffect(() => {
        if(count != 0  && count < 3){
            setAge(age+1);
        }
    }, [count]);

    return(
        <div>
            <div>안녕 나는 {age} , {count}</div>
            <button onClick={() => {
                //count = 2 일때
                setCount(count+1)//count =3
            }}>누르면 한살 추가</button>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>

                {
                    state.cart.map((item,i) =>
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].title}</td>
                            <td>{state.cart[i].count}</td>
                            <td><button onClick={()=>
                                dispatch(addCount(state.cart[i].id))
                            }>+</button></td>
                        </tr>
                    )
                }

                </tbody>
            </Table>

            <button onClick={() => {
                dispatch(changeName())
            }}>이름 변경 버튼</button>

            <button onClick={() => {
                dispatch(increase(20))
            }}>나이 변경 버튼</button>

        </div>
    )
}

export default Cart