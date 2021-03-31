/*eslint-disable*/
//1.컴포넌트 js파일은 파일명 첫글자가 대문자이다 2.컴포넌트사용을위해 리액트라이브러리를 임포트
import {react,useEffect, useState,useContext} from 'react'; // let {}  = react() ..ES6의 신문법 Rest과 같다. 반환값중에 필요한 값만 변수로 선언하여 사용한다
import {useHistory,useParams} from 'react-router-dom'//1.페이지이동을위한 리액트 라우터 라이브러리 2.useParams 파라미터의 변수를 가져오기 위한 라이브러리
import styled from 'styled-components'; //1.styled-components 의 선언
import './Detail.scss'
import {sizeContext} from './App.js'//sizeContext 사용하기위해서 

function Detail(props) {
    let history = useHistory();//페이지이동라우터 초기화
    let {id}=useParams();//{:파라미터..}
    let [chk,chkUpd]=useState(true)
    /* es6의 find를 사용한 방법
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
    });
     */

    let timer=null

    //HOOK 신문법. 1.컴포넌트가 등장(마운트)될때 & 재렌더링때 사용됨  //주로 AJAX통신을 넣기도함
    useEffect(()=>{
        //settimeOut즉시실행함수
        timer=(function(){
            setTimeout(()=>{
                chkUpd(false)
            },3000);
        })()       
        //return ()=>{ clearTimeout(타이머) }
    })
    
    //HOOK 신문법. 2.컴포넌트가 사라질(언마운트)때 사용됨
    useEffect(()=>{
        return  clearTimeout(timer) //timer해제
        // return function(){
        //     alert('언마우트 HOOK')
        // }
    })

    //HOOK 신문법. 3.컴포넌트가 최초 로드될때만 사용됨. 매개변수 useEffect(()=>{},[chk])는 chk가 업데이트될때 실행됨. [] 만 존재할시 최초 로드시에만 사용됨 
    useEffect(()=>{
        console.log(1)
    },[])

    /* styled-components를 사용하면 생기는 이점 1.CSS파일을 찾을 필요가 없다*/
    let  박스=styled.div`
    padding:20px;
    `
    let 제목=styled.h4`
    font-size: 25px;
    color:${props=>props.userColor}
    `

    function changestock() {
        let deepCopy=[...props.stock_prop]
        deepCopy[id]=parseInt(props.stock_prop[id])+1
        props.stockUpd_prop(deepCopy)
    }

    return (
        // 부트스트랩 레이아웃기본, 1.container > 2.row 3.mt은 마진탑 
        <div className="container">
            <박스>
                <제목 userColor={"gray"}>
                    Detail
                </제목>
            </박스>
            
            {/* 아래의 if 문 사용이 좋은 관습 */}
            <div className="my-alert1" style={chk?{visibility:"visible"}:{visibility:"hidden"}}>
                <p>재고가 얼마 남지 않았습니다</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(parseInt(id)+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.detail_prop[id].title}</h4>
                    <p>{props.detail_prop[id].content}</p>
                    <p>{props.detail_prop[id].price}원</p>
                    <Stock stock_prop={props.stock_prop[id]} stockUpd_prop={props.stockUpd_prop}/>
                    <Size></Size>
                    <button className="btn btn-danger" onClick={changestock}>주문하기</button>
                    <button className="btn btn-danger ml-2" onClick={()=>{
                        history.goBack()//뒤로가기
                        //history.push('/')//해당 url로이동
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    );
}

function Stock(props) {
    return (
        <p>재고 : {props.stock_prop}</p>
    );    
}

function Size(params) {
    let sizeInfo=useContext(sizeContext)
    let {id}=useParams();//{:파라미터..}

    return  (
        <p>사이즈 : {sizeInfo[id].join(',')}</p>
    );
}

// HOOK -> Trriger
// class Detail2 extends React.Component {
//     componentDidMount(){
//       //Detail2 컴포넌트가 Mount 되고나서 실행할 코드
//     }
//     componentWillUnmount(){
//       //Detail2 컴포넌트가 Unmount 되기전에 실행할 코드
//     }
//   }
export default Detail