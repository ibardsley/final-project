import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


const Read = () => {
    const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://63ebe32b31ef61473b1adb7e.mockapi.io/todos`)
        .then((response) => {
            setAPIData(response.data); 
        })
})

const setData = (data) => {
    let { id, todoName, todoInfo, date, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Todo Name', todoName);
    localStorage.setItem('Todo Info', todoInfo);
    localStorage.setItem('Date', date);
    localStorage.setItem('Checkbox Value', checkbox);
}

const getData = () => {
    axios.get(`https://63ebe32b31ef61473b1adb7e.mockapi.io/todos`)
        .then((getData) => {
            setAPIData(getData.data); 
        })
}

const onDelete = (id) => {
    axios.delete(`https://63ebe32b31ef61473b1adb7e.mockapi.io/todos/${id}`)
        .then(() => {
            getData();
        })
}

  return (
    <div>
    <Table striped bordered hover variant='primary'>
      <thead>
        <tr>
          <th>Complete</th>
          <th>Todo Name</th>
          <th>Todo Info</th>
          <th>Due Date</th>
          <th>Checked</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {APIData.map((data) => {
            return (
                <tr>
                    <td><input className="form-check-input me-3" type="checkbox"></input></td>
                    <td>{data.todoName}</td>
                    <td>{data.todoInfo}</td>
                    <td>{data.date}</td>
                    <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                    <td><Link to='/update'>
                    <Button onClick={() => setData(data)}>Update</Button>
                    </Link>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                    </td>
                </tr>
            )})}
      </tbody>
    </Table>
    </div>
  )
}

export default Read