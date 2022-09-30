import React, { Component } from 'react';
import { Button, Alert, Breadcrumb, Container} from "react-bootstrap"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
    render(){
      return(
        <Container className="headliner d-lg-flex p-3">
            <div className="mb-3">
              <img className="demoImage" src="https://source.unsplash.com/8FdEwlxP3oU" alt="something"></img>
            </div>
            <div className="p-3 order-first">
              <p classname="p-3">Lorem ipsum dolor sit amet</p>
              <a href="#" classname="p-3">lorem ipsum </a>
              <p classname="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra.</p>
              <Button className="call-to-action">Action</Button>
            </div>
          </Container>
      )
    }
}

export default App;
