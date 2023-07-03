import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../assets/styling/Api.css'


const Api = () => {
const [comment, setcomment] = useState([])
let endpoint=`http://jsonplaceholder.typicode.com/comments`
const getComment=()=>{
    axios
    .get(endpoint)
    .then((response)=>{
 console.log(response);
 setcomment(response.data)
 console.log(comment);
    })
    .catch((err)=>{
        console.log(err);
    })
}
  return (
    <>
    <button className='btn btn-primary' onClick={getComment}>Click me</button>
    <table className='table table-success table-striped' border='1'>
    {comment.map((item) => (
            <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.email}</th>
                <th>{item.body}</th>
            </tr>
      ))}
      </table>
   
    
  
    </>
  )
}

export default Api