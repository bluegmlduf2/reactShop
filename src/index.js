/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 라우터 환경설정
import { BrowserRouter } from 'react-router-dom';//1.리액트 라우터 초기설정 2.경로없이 이름만 있으면 보통 라이브러리
//import {HashRouter} from 'react-router-dom';//3.해시라우팅 , 라우팅시 # 해시가 포함된 url뒤의 정보는 서버에 보내지 않는다.

// 리덕스 사용 이유 : 상태관리를 위함 => 큰프로젝트의 스테이트정보의 수정용이
// 리덕스 환경설정 
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

//리덕스로 공유할 값선언
// let initState = [
//   { id: 1, title: "sinbal1", color: "red", quantity: 4 },
//   { id: 2, title: "sinbal2", color: "red", quantity: 5 },
//   { id: 3, title: "sinbal3", color: "red", quantity: 6 },
//   { id: 4, title: "sinbal4", color: "red", quantity: 7 }
// ]
let initState = []


//리덕스의 값 수정 방법을 정의 (해당 함수는 state를 반환해야함)
function reducer(state = initState, action) {
  if (action.type === "addCartCnt") {
    //카트에 수량을 더하기
    let copy = [...state]
    copy.forEach((e) => {
      if (e.id == action.payload) {
        e.quantity++
      }
    })

    return copy
  } else if (action.type === "minusCartCnt") {
    //카트에 수량을 제외하기
    let copy = [...state]
    //1개이상 수량 제거 가능
    copy.forEach((e) => {
      if (Math.sign(e.quantity) === 1 && e.quantity > 1 && e.id == action.payload) {
        e.quantity--
      }
    })

    return copy
  } else if (action.type === "addCart") {
    //주문정보를 카트에 추가
    // let orderData=action.payload
    // let copy = [...state]
    // copy.push(orderData)
    let findData = findSameData(state, action)

    //신규 추가
    if (findData == undefined) {
      action.payload.quantity = 1
      state.push(action.payload)
    } else {
      //기존 추가
      findData.quantity++
    }

    return state
  } else {
    return state
  }
}

//find함수를 이용해서 객체내에서 일치하는 값을 반환함 
function findSameData(state, action) {
  //주문한 값
  let orderData = action.payload

  //이미 카트에 값이 존재할 경우 (find함수,findIndex함수 둘다 사용 가능)
  let findData = state.find((e) => {
    return orderData.id == e.id
  });

  return findData
}


//리덕스로 공유할 값선언
let alertState = true

//리덕스의 값 수정 방법을 정의 (해당 함수는 state를 반환해야함)
function alertReducer(state = alertState, action) {
  if (action.type === "closeAlert") {
    return false
  } else {
    return state
  }
}

//리덕스로 사용할 값 생성
let store = createStore(combineReducers({ reducer, alertReducer }))
// let store = createStore(reducer)//전달값 1개인 경우

ReactDOM.render(
  <React.StrictMode>
    {/* 라우터 사용을 위해서 BrowserRouter태그를 사용 */}
    {/* 라우터의 ROOT URL과 package.json의 homepage를 맞춰준다 */}
    <BrowserRouter basename="/reactShop">
      {/* 1.Redux의 셋팅 (감싸진 애들은 props없이 state사용 가능)*/}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
