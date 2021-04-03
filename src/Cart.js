/*eslint-disable*/
import react from 'react'; // import 일반(export default된거),{변수,함수} from X 
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart(props) {
    return (
        <div>
            <Table responsive="md">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>색상</th>
                        <th colSpan="2">변경</th>
                    </tr>
                </thead>
                <tbody>
                    {props.state.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.quantity}</td>
                                <td>{e.color}</td>
                                {/* dispatch :보내다 (리덕스의 값을 수정할때 사용) 파라미터=>액션 */}
                                <td><button className="btn" onClick={() => { props.dispatch({ type: 'addCartCnt' }) }}>+</button></td>
                                <td><button className="btn" onClick={() => { props.dispatch({ type: 'minusCartCnt' }) }}>-</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {props.alertState ? 
            <div className="my-alert2">
                <p>지금 구매하시면 신규할인 20%</p>
                <button className="btn btn-light mt-2" onClick={()=>{props.dispatch({ type: 'closeAlert' })}}>닫기</button>
            </div> 
            : null}
        </div>
    );
}

// 리덕스에서 설정한 값을 세팅해주는 함수 (redux->state->props)
function reduxStateToProps(state) {
    //index.js에서 설정한 store(state)통채로 가져와서 Cart(props)함수의 props로 던짐 
    return {
        state: state.reducer,
        alertState: state.alertReducer
    }
}

export default connect(reduxStateToProps)(Cart)// A()()는 A의반환값이 함수인경우임.
// export default Cart
