import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import BoardList from '../components/BoardList';
import BoardWrite from '../components/BoardWrite';

const BoardNav = () => {
  return (
    <div>
      <Navbar bg="light" variant='light'>
        <Container>
        <Navbar.Brand href="/">게시판</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">목록</Nav.Link>
          <Nav.Link href="/write">글쓰기</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<BoardList />}/>
        <Route path="/write" element={<BoardWrite />}/>
      </Routes>
    </div>
  );
};

export default BoardNav;