/*eslint-disable*/
import react, { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import shoeDataArr from './data.js';
import Detail from './Detail.js'; // 디테일 컴포넌트
import { Route, Link, Switch } from 'react-router-dom' /* 라우터 초기 설정 */

function App() {
  let [shoeInfo, shoeInfoUpd] = useState(shoeDataArr)

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
        </Route>

        <Route path="/detail/:id">
          {/* 1.url에 파라미터를 같이 넘기는 형식 */}
          <Detail detail_prop={shoeInfo} />
        </Route>
      </Switch>
    </div>
  );
}

function ShoeItems(props) {
  return (
    <div className="col-md-4">
      {/*1.md => 모바일사이즈  2.width="100%"가 없으면 기본이미지 사이즈로 적용됨 */}
      {/* 문자열 안에 변수넣는법 {"a"+b+"c"} */}
      <img src={"https://codingapple1.github.io/shop/shoes" + ((props.shoeIndex) + 1) + ".jpg"} width="100%" alt="상품1" />
      <h4>{props.shoeInfoProp.title}</h4>
      <p>{props.shoeInfoProp.content}</p>
      <p>{props.shoeInfoProp.price}</p>
    </div>
  );
}

export default App;
