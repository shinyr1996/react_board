import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Regst from '../components/Regst';
import BoardList from '../components/BoardList';

const BoardNav = () => {
    return (
        <div>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">게시판</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>목록</Nav.Link>
            <Nav.Link href='/Regst'>글쓰기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<BoardList/>}></Route>
        <Route  path='/Regst' element={<Regst/>}></Route>
      </Routes> 
        </div>
    );
};

export default BoardNav;