import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function Cards() {
  return (
    <div className='card-group'>
      <div>
    <Card text='center' bg='dark' style={{ width: '18rem' }}>
      <Card.Body variant='dark'>
        <Card.Title variant='dark'>Create a New Todo</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="secondary"><NavLink style={{ textDecoration: 'none' }} to='/create'><li>Create</li></NavLink></Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card text='center' bg='dark' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>View Todo List</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="secondary"><NavLink style={{ textDecoration: 'none' }} to='/read'><li>View</li></NavLink></Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Cards;