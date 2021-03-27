/*eslint-disable*/
//1.컴포넌트 js파일은 파일명 첫글자가 대문자이다 2.컴포넌트사용을위해 리액트라이브러리를 임포트
import react from 'react';
import {useHistory,useParams} from 'react-router-dom'//1.페이지이동을위한 리액트 라우터 라이브러리 2.useParams 파라미터의 변수를 가져오기 위한 라이브러리

function Detail(props) {
    let history = useHistory();//페이지이동라우터 초기화
    let {id}=useParams();//{:파라미터..}
    debugger
    return (
        // 부트스트랩 레이아웃기본, 1.container > 2.row 3.mt은 마진탑 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.detail_prop[id].title}</h4>
                    <p>{props.detail_prop[id].content}</p>
                    <p>{props.detail_prop[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger ml-2" onClick={()=>{
                        history.goBack()//뒤로가기
                        //history.push('/')//해당 url로이동
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail