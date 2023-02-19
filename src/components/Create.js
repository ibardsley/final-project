import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useHistory } from 'react-router';

function Create() {
    let history = useHistory();
    const [todoName, setTodoName] = useState('');
    const [todoInfo, setTodoInfo] = useState('');
    const [date, setDate] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://63ebe32b31ef61473b1adb7e.mockapi.io/todos`, {
            todoName,
            todoInfo,
            date,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }


  return (
    <Form className='create-form'>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Todo Name</Form.Label>
        <Form.Control 
        type="username" placeholder="Enter Todo Name" 
        onChange={(e) => setTodoName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicInfo">
        <Form.Label>Todo Info</Form.Label>
        <Form.Control 
        type="info" 
        placeholder="Enter Todo Info" 
        onChange={(e) => setTodoInfo(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
                type="date"
                placeholder="DateRange"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Important!" value={''} onChange={(e) => setCheckbox(!checkbox)} />
      </Form.Group>

      <Button onClick={postData} type="button">Submit</Button>
    </Form>
  );
}

export default Create;