import React, { useEffect, useState }from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Update = () => {
    const [todoName, setTodoName] = useState('');
    const [todoInfo, setTodoInfo] = useState('');
    const [date, setDate] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTodoName(localStorage.getItem('Todo Name'))
        setTodoInfo(localStorage.getItem('Todo Info'))
        setDate(localStorage.getItem('Date'))
        setCheckbox(localStorage.getItem('Checkbox'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://63ebe32b31ef61473b1adb7e.mockapi.io/todos/${id}`, {
            todoName,
            todoInfo,
            date,
            checkbox
        })
    }


  return (
    <Form className='create-form'>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Todo Name</Form.Label>
        <Form.Control 
        type="username" placeholder="Enter Todo Name" value={todoName}
        onChange={(e) => setTodoName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Todo Info</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Enter Todo Info" 
        value={todoInfo}
        onChange={(e) => setTodoInfo(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Add Todo" checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={updateAPIData}>
        Update
      </Button>
    </Form>
  )
}

export default Update