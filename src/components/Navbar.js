import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light" fixed='top'>
        <Container>
          <Navbar.Brand to="/">Todo App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to='/'>Home</Nav.Link>
            <Nav.Link to='/create'>New Todo</Nav.Link>
            <Nav.Link to="/read">Todo List</Nav.Link>
            <Nav.Link to="/update">Update Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;