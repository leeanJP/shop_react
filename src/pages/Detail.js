import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import {Nav} from "react-bootstrap";
import {Context1} from "../App.js";
// let YellowBtn = styled.button`
// //    css 작성
//     background:  ${props => props.bg};
//     color : ${props => props.bg == 'blue' ? 'white' : 'black'};
//     padding: 10px;
// `

function Detail(props) {

    let {id} = useParams();
    let {items} = useContext(Context1);
    let findItem = items.find(function (x){
        return x.id == id;
    })

    console.log(items);
    const imgUrl = process.env.PUBLIC_URL + "/item" + (Number(id) + 1) + ".png"

    let [count, setCount] = useState(0);
    let [alert1, setAlert1] = useState(true);
    let [num , setNum] = useState('');
    let [tab, setTab] = useState(0);


    useEffect(() => {
        //컴포넌트가 mount update 될 때 코드 실행됨
        let timer = setTimeout(()=> {setAlert1(5000)}, 5000)

        return () => {
            //여기있는게 먼저 실행되고
            clearTimeout(timer);
        }

    },[count]);

    useEffect(() => {
        if(isNaN(num) == true){
            alert('숫자만 입력가능');
        }
    }, [num]);


    return(
        <div className="container">

            {
                alert1 == true ? <div className="alert alert-danger">
                    5초 이내 클릭 시 할인
                </div> : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/item' + (Number(id) + 1) + '.png'} width="100%" ></img>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <input onChange={(e) => {setNum(e.target.value)}}></input>

            <button onClick={()=> {setCount(count+1)}}>버튼</button>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">상품상세</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">상품 리뷰</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)}eventKey="link2">Q&A</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab ={tab}/>

        </div>
    )
}

function TabContent({tab}){
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout( ()=> {setFade('end')},300)
        return () => {
            setFade('');
        }
    }, [tab]);

    return (
        <div className={'start ' + fade}>
            {[<div>내용0</div>,  <div>내용1</div> , <div>내용2</div>][tab]}
        </div>
    )
}

export default Detail