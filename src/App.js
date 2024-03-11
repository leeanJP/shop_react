import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import data from './data.js';
import React, {useState} from "react";
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Detail from './pages/Detail.js';
import Cart from './pages/Cart.js';
import axios from "axios";
import async from "async";

function App() {

    let [items] = useState(data);
    let navigate = useNavigate();
    //post 요청
    // axios.post('요청할 URL', {name:'kim'});

    //
    let param = {id: 0 , pass : "1231sd"}
    // async function getAPI() {
    //     try{
    //         const  res = await axios.get('url1');
    //     }catch (e){
    //
    //     }
    // }

    //동시에 여러 Ajax 요청 날리기
    // Promise.all([axios.get('URL1'), axios.get('URL2')])
    //     .then()


    return (
        <div className="App">


            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/detail">Detail</Nav.Link>
                        {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        <button onClick={() => {navigate('detail')}}>상세페이지 이동</button>
                        <button onClick={() => {navigate(-1)}}>이전페이지</button>
                        <button onClick={() => {navigate(1)}}>다음페이지</button>

                    </Nav>
                </Container>
            </Navbar>


            <Routes>
                <Route path="*" element={<div>404 페이지</div>}/>
                <Route path="/" element={
                    <>
                        <div className="main-bg"></div>
                        <div className="container">
                            <div className="row">
                                {/*
                                    1. 상품 목록을 컴포넌트화 하기
                                    2. 컴포넌트 > 데이터바인딩
                                    3. 3개 상품 map으로 반복
                                */}
                                {
                                    items.map((item,index)=> {
                                        return (
                                            <Card item={item} index={index+1} ></Card>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <button onClick={()=> {
                            axios.get("https://raw.githubusercontent.com/leeanJP/shop_react/master/src/data.json")
                                .then((data) => {
                                    //요청이 성공했을 때
                                    console.log(data);
                                    let copy = [...items, ...data.data.webtoons]
                                    //copy = [기존 array, 가져온 data]
                                    //setItems(copy);
                                    // [{},{},{},{},{},{}]

                                }).catch(()=>{
                                    //요청이 실패했을 때

                                    console.log("axios 요청 실패");
                                }).finally(() =>{
                                    //요청 성공여부에 상관없이 항상 실행할 코드
                                })
                        }}>ajax 요청</button>
                    </>
                }/>
                <Route path="/detail/:id" element={
                        <Detail />
                    }
                />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/about" element={<About/>}>
                    <Route path="member" element={<div>멤버 소개</div>}/>
                    <Route path="loc" element={<div>오시는 길</div>}/>
                </Route>
                <Route path="/event" element={<EventPage/>}>
                    <Route path="one" element={<p>생일축하 쿠폰 이벤트</p>}></Route>
                    <Route path="two" element={<p>첫 주문시 배송비 무료!</p>}></Route>

                </Route>

                {/*
                    1. /event/one 페이지 접속 시 생일축하 쿠폰 이벤트 표시
                    2. /event/two 페이지 접속 시 첫 주문 배송비 무료 이벤트 표시
                */}
            </Routes>
        </div>
    );
}

function EventPage() {
    return(
        <div>
            <h2>오늘의 이벤트</h2>
            <Outlet></Outlet>
        </div>
    )
}

function About() {
    return (
        <div>
            <h2>about 페이지</h2>
            <Outlet>
            </Outlet>
        </div>
    )
}



function Card(props){
    return (
        <div className="col-md-4">
            <div className="image-box">
                <img className="image-thumbnail" src={process.env.PUBLIC_URL+'/item'+props.index+'.png'}>

                </img>
            </div>
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
        </div>
    )
}

class Detail2 extends React.Component {
    componentDidMount() {
        //컴포넌트가 로드되고 나서 실행할 코드
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //컴포넌트가 업데이트 되고나서 실행할 코드

    }
    componentWillUnmount() {
        //컴포넌트가 삭제되기전 실행할 코드
    }
}


export default App;
export let Context1 = React.createContext();