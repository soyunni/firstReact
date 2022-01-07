import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar,Nav, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap';
import { sampleList } from './data.js';
import Detail from './Detail.js';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
          <Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Route exact path="/">
        <div className="jumbotron">
          <div className='jumbotron-container'>
            <div className="background">
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            { 
              sampleList.map(function(data, idx) {
                return <Card data={ data } key={ data.id }/>
              })
            }
          </div>
        </div>
      </Route>
      <Switch>
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/:id">
            <div>새로 만든 route입니다.</div>
        </Route>
      </Switch>
  </div>
  );
}

function Card(obj) {
  let data = obj.data;
  return (
    <div className="col-md-4">
      <img src={ data.src } width="100%" />
      <h4>{ data.title }</h4>
      <p>{ data.content }
        <br/> { data.price }
      </p>
    </div>
  )
}

export default App;
