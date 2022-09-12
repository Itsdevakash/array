import React from 'react'

export default function Handle_array() {

      //map loop
//   student.map((item)=>{
// console.log(item)
//   })

  //for loop
  // for (let index = 0; index < student.length; index++) {
  //   console.log(student)
    
  // }

  
     //const student=['akash','arti','bharti','shalu'];

  const student=[

    {name:'akash',email:'akash@gmail.com',contact:125},
    {name:'arti',email:'arti@gmail.com',contact:111}
  ]

  return (
    <div>
       <table border="1">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>

      {

        student.map((data,i)=>
       
        <tr key={i}>

          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
        </tr>
       
        
        )
      }

</tbody>

      </table>
    </div>
  )
}
