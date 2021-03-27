import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';//1.리액트 라우터 초기설정 2.경로없이 이름만 있으면 보통 라이브러리
//import {HashRouter} from 'react-router-dom';//3.해시라우팅 , 라우팅시 # 해시가 포함된 url뒤의 정보는 서버에 보내지 않는다.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
