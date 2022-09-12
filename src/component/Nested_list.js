import React from 'react'
import Table from 'react-bootstrap/Table';

export default function Nested_list() {

    const users=[

        {name:'a',email:'akash@gmail.com',contact:125,address:[


            {House_No:"C9/158",Area:"chetganj"},
            {House_No:"C9/159",Area:"chetganj"},
            {House_No:"C9/157",Area:"chetganj"}
        ]},
        {name:'b',email:'arti@gmail.com',contact:111,address:[


            {House_No:"C9/158",Area:"chetganj"},
            {House_No:"C9/159",Area:"chetganj"},
            {House_No:"C9/157",Area:"chetganj"}
        ]},
        {name:'c',email:'akash@gmail.com',contact:125,address:[


            {House_No:"C9/158",Area:"chetganj"},
            {House_No:"C9/159",Area:"chetganj"},
            {House_No:"C9/157",Area:"chetganj"}
        ]},
        {name:'d',email:'arti@gmail.com',contact:111,address:[


            {House_No:"C9/158",Area:"chetganj"},
            {House_No:"C9/159",Area:"chetganj"},
            {House_No:"C9/157",Area:"chetganj"}
        ]},
        {name:'e',email:'akash@gmail.com',contact:125,address:[


            {House_No:"C9/158",Area:"chetganj"},
            {House_No:"C9/159",Area:"chetganj"},
            {House_No:"C9/157",Area:"chetganj"}
        ]},
        ]
  return (
    <div>
        <Table striped bordered hover variant="dark">
   <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Address</th>
        </tr>

      {

       users.map((items,e)=>
      
        <tr key={e}>
            <td>{e+1}</td>
          <td>{items.name}</td>
          <td>{items.email}</td>
          <td>{items.contact}</td>
          <td>
            {
           items.address.map((data,o)=>
           <Table striped bordered hover variant="dark">
           <tbody>
                <tr  key={o}>
                <td>{data.House_No}</td>
                <td>{data.Area}</td>
                </tr>
                </tbody>
                </Table>          
            )
            }
            </td>
        </tr>
        
        
        )
      }


</tbody>
      </Table>
    </div>
  )
}
