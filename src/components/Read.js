import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Read = () => {
    const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://63ebe32b31ef61473b1adb7e.mockapi.io/todos`)
        .then((response) => {
            setAPIData(response.data); 
        })
}, []);

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
    <div className='todoForm'>
     <table className='read-form'>
      <thead>
        <tr>
          <th>Complete</th>
          <th>Todo Name</th>
          <th>Todo Info</th>
          <th>Due Date</th>
          <th>Important!</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {APIData.map((data) => {
            return (
                <tr key={data.id}>
                    <td><input className='checkbox' type="checkbox"></input></td>
                    <td>{data.todoName}</td>
                    <td>{data.todoInfo}</td>
                    <td>{data.date}</td>
                    <td>{data.checkbox ? 'Important!' : 'Regular'}</td>
                    <td><Link to='/update'>
                    <button onClick={() => setData(data)}>Update</button>
                    </Link>
                    <button onClick={() => onDelete(data.id)}>Delete</button>
                    </td>
                </tr>
            )})}
      </tbody>
     </table>
    </div>
  )
}

export default Read