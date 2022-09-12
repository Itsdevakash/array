import React from 'react'
import Table from 'react-bootstrap/Table';
import Reuse_2 from './Reuse_2';

export default function Reuse() {
    const reuse=[

        {name:'AReuse',email:'akash@gmail.com',contact:125},
        {name:'BReuse',email:'arti@gmail.com',contact:111},
        {name:'CReuse',email:'akash@gmail.com',contact:125},
        {name:'DReuse',email:'arti@gmail.com',contact:111},
        {name:'EReuse',email:'akash@gmail.com',contact:125},
        ]

  return (
    <div>
   
      {

reuse.map((reuses,i)=>
<Reuse_2  data={reuses} />       
        
        )
      }
    </div>
  )
}
