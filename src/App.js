import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from './components/SideNavbar/SideNavbar';

function App() {
  return (
    <React.Fragment>
      <Container fluid className="main-layout">
        <BrowserRouter>
          <Routes>
                <Route exact path="/" element = {
                  <Row>
                    <SideNavbar/>
                    <Col xs={9} xl={9}>
                    </Col>
                  </Row>
                } />
          </Routes>
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}

export default App;
