import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#list">Todo List</Nav.Link>
            <Nav.Link href="#update">Update Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;