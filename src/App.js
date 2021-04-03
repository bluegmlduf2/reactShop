/*eslint-disable*/
import react, { useState } from 'react'; // import 일반(export default된거),{변수,함수} from X 
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import shoeDataArr from './data.js';
import Detail from './Detail.js'; // 디테일 컴포넌트
import Cart from './Cart.js'; // 카트 컴포넌트
import { Route, Link, Switch } from 'react-router-dom' /* 라우터 초기 설정 */
import axios from 'axios' //AJAX

//1.context사용선언(전역변수와비슷)
//2.detail.js에서 import해서 사용하기때문에 export해주기
export let sizeContext=react.createContext()

function App() {
  let [shoeInfo, shoeInfoUpd] = useState(shoeDataArr) //신발 정보
  let [stockInfo, stockUpd] = useState([1,4,5,6,10,2]) //재고 정보
  let [sizeInfo, sizeUpd] = useState([['260','265'],['free'],['free'],['240','245'],['free'],['free']]) //사이즈 정보

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* href대신에 리액트의 Link태그를 사용한다 */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            {/* <Nav.Link><Link to="/detail">Detail</Link></Nav.Link> 해당줄은 a태그안에 a태그를 사용하였다는 warning메세지 발생함 위와같이 수정요망 */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/*Switch 1.path가 중복되는경우 exact를 사용하지않아도 제일 위의 Route만 표시된다 */}
      <Switch>
        {/* 메인페이지 라우터 , exact속성은 해당 라우터가 다른 url경로에 포함되지 않도록 막는다. */}
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season OFF !!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
          </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="container">
            <div className="row">
              {shoeInfo.map((e, i) => {
                //map안에서 return은 필수.안해서 꽤 헤맴
                return (
                  <ShoeItems shoeInfoProp={e} shoeIndex={i} key={i} />
                )
              })}
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={() => {
              // Ajax는 1. jQuery Ajax를 쓰든가, 2. axios 설치해서 쓰든가, 3. 쌩자바스크립트 fetch()를 쓰든가 
              //AXIOS를 사용하면 좋은점 : JSON을 자동으로 객체로 바꿔줌. JSON.parse()를 사용할 필요가 없음
              //json데이터가 키에 "key"가 있으면 아직 변환전 json문자열이다
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                //console.log(...[1, 2, 3]) // 1, 2, 3   ES6의 신문법 Spread문법(...) // ...[벗길값] , ...{벗길값}
                console.log(result.data)
                let returnArr=result.data
                let returnArr_deepCp=[...shoeInfo]//DeepCopy
                let inputArr=returnArr_deepCp.concat(returnArr)

                shoeInfoUpd(inputArr)

                //한줄로 표현 
                //ex arr1=[{1}.{2}] arr2=[{3}]  -> ...가 중괄호를 벗김 ->[{1}.{2}.{3}]이 된다
                //[...arr1,...arr2]
              })
              .catch((e)=>{
                console.error(e)
              })

              // 값보내기
              // axios.post('https://codingapple1.github.io/shop/data2.json', { id : 'test', pw : 1234})
              // .then((result)=>{  })
              // .catch(()=>{ })
          }}>더보기</button>
        </Route>

        <Route path="/detail/:id">
          {/* context사용범위선언 */}
          <sizeContext.Provider value={sizeInfo}>
            {/* 1.url에 파라미터를 같이 넘기는 형식 */}
            <Detail detail_prop={shoeInfo} stock_prop={stockInfo} stockUpd_prop={stockUpd}/>
          </sizeContext.Provider>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

      </Switch>
    </div>
  );
}

function ShoeItems(props) {
  return (
    <div className="col-md-4">
      <Link to={"/detail/"+props.shoeIndex}>
      {/*1.md => 모바일사이즈  2.width="100%"가 없으면 기본이미지 사이즈로 적용됨 */}
      {/* 문자열 안에 변수넣는법 {"a"+b+"c"} */}
      <img src={"https://codingapple1.github.io/shop/shoes" + ((props.shoeIndex) + 1) + ".jpg"} width="100%" alt="상품1" />
      <h4>{props.shoeInfoProp.title}</h4>
      <p>{props.shoeInfoProp.content}</p>
      <p>{props.shoeInfoProp.price}</p>
      </Link>
    </div>
  );
}

export default App;
