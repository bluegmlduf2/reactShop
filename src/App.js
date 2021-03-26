/*eslint-disable*/
import react, { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import shoeDataArr from './data.js';

function App() {
  let [shoeInfo, shoeInfoUpd] = useState(shoeDataArr)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
          {shoeInfo.map((e,i)=>{
            //map안에서 return은 필수.안해서 꽤 헤맴
            return(
              <ShoeItems shoeInfoProp={e} key={i} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

function ShoeItems(props) {
  let imagePath="https://codingapple1.github.io/shop/shoes"+((props.shoeInfoProp.id)+1)+".jpg"
  return (
    <div className="col-md-4">
      {/*1.md => 모바일사이즈  2.width="100%"가 없으면 기본이미지 사이즈로 적용됨 */}
      <img src={imagePath} width="100%" alt="상품1" />
      <h4>{props.shoeInfoProp.title}</h4>
      <p>{props.shoeInfoProp.content}</p>
      <p>{props.shoeInfoProp.price}</p>
    </div>
  );
}

export default App;
