import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar,Nav, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap';
import axios from 'axios';
import Detail from './Detail.js';

function App() {
  let [ shoesList, shoesListFunc ] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:11000/detail/list?page=`).then((result)=>{
        let dataList = result.data.list;
        shoesListFunc(dataList);
    }).catch((e)=>{
        console.log(e);
    });
  }, []);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Switch>
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
                shoesList.map(function(data, idx) {
                  return <Card data={ data } key={ data.id }/>
                })
              }
            </div>
          </div>
          <button className="btn btn-primary" onClick={()=>{

            axios.get('http://localhost:11000/detail/list?page=2')
            .then((result)=>{ shoesListFunc([...shoesList, ...result.data.list ]) })
            .catch(()=>{ })
          }}>더보기</button>
        </Route>
        <Route path="/detail/:id">
          <Detail/>
        </Route>
      </Switch>
  </div>
  );
}

function Card(obj) {
  let data = obj.data;
  return (
    <div className="col-md-4">
      <img src={ data.img } width="100%" />
      <h4>{ data.title }</h4>
      <p>{ data.content }
        <br/> { data.price }
      </p>
      <button className="btn btn-primary" onClick={()=> {
        window.location.href=`/detail/${data.id}`;
      }}>상세보기</button>
    </div>
  )
}

export default App;
