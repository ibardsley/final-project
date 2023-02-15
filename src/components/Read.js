import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';


const Read = () => {
  return (
    <div>
         <Table striped bordered hover variant='light'>
      <thead>
        <tr>
          <th>Complete</th>
          <th>Todo Name</th>
          <th>Todo Info</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input className="form-check-input me-3" type="checkbox"></input></td>
          <td>Mark</td>
          <td>Otto</td>
          <td>1-1-23</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Read