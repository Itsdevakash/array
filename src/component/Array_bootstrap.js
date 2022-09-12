import React from 'react'
import Table from 'react-bootstrap/Table';

export default function Array_bootstrap() {

    const user=[

        {name:'a',email:'akash@gmail.com',contact:125},
        {name:'b',email:'arti@gmail.com',contact:111},
        {name:'c',email:'akash@gmail.com',contact:125},
        {name:'d',email:'arti@gmail.com',contact:111},
        {name:'e',email:'akash@gmail.com',contact:125},
        {name:'f',email:'arti@gmail.com',contact:111},
        {name:'g',email:'akash@gmail.com',contact:125},
        {name:'h',email:'arti@gmail.com',contact:111},
        {name:'i',email:'akash@gmail.com',contact:125},
        {name:'j',email:'arti@gmail.com',contact:111},
        {name:'k',email:'akash@gmail.com',contact:125}
        ]



  return (
    <div>
         <Table striped bordered hover size="sm">
   <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>

      {

        user.map((item,i)=>
        item.contact === 125 ?
        <tr key={i}>
            <td>{i+1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
        </tr>:null
        
        
        )
      }


</tbody>
      </Table>
    </div>
  )
}
