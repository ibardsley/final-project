import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light" fixed='top'>
        <Container>
          <Navbar.Brand as={Link} to="/">Todo App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/create'>New Todo</Nav.Link>
            <Nav.Link as={Link} to='/read'>Todo List</Nav.Link>
            <Nav.Link as={Link} to='/update'>Update Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;