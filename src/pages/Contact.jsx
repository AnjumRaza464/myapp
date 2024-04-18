import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


function Contact ()  {
  const notify = () => toast("Data has been saved!");
  const [contact,setContact]=useState({
    fullname:"",
    email:""
  })

  const [contacts, setContacts] = useState([])
   const handleSubmit=(e)=>{
    e.preventDefault();
    contacts.push(contact)
    localStorage.setItem("contact",JSON.stringify(contacts))
    notify()
    setContact({
    fullname:"",
    email:""
 })
}
  useEffect(() => {
    let storedContacts = localStorage.getItem("contact")
    storedContacts = JSON.parse(storedContacts)
    if(storedContacts != null){
      setContacts(storedContacts)
    }

  }, []);

  return (
    <div className="container">
     

<form className="row g-3 w-50" onSubmit={handleSubmit}>
  <div className="col-md-12">
    <label htmlFor="fullname" className="form-label">Full Name</label>
    <input type="text" onChange={(event)=>setContact({...contact,fullname:event.target.value})} value={contact.fullname} className="form-control" id="fullname" />
  </div>
  <div className="col-md-12">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" onChange={(event)=>setContact({...contact,email:event.target.value})} value={contact.email} className="form-control" id="email" />
  </div>
  
<div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

<table className="table">   
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">fullName</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody> {
  contacts.length < 1 ? <tr><td><h1>Data not found</h1></td></tr>:
  contacts.map((item,index)=>{
    return(
      <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{item.fullname}</td>
        <td>{item.email}</td>
        <td>
          <button className="btn btn-danger me-2"><i className="bi bi-trash3-fill"></i></button>
        <button className="btn btn-warning me-2"><i className="bi bi-pencil"></i></button>
        <button className="btn btn-success me-2"><i className="bi bi-telephone-inbound"></i></button>
        </td>  
      </tr>
    )
  })
}
 </tbody>
  <ToastContainer />
</table>
        
    </div>
  )
}

export default Contact

// import React, { useEffect, useState } from "react"


// function Contact ()  {
//   // Contact Book [{}]
//   const [contactBook, setContactBook] = useState([]);
//   const [contact,setContact]=useState({
//     fullname:"",
//     email:"",
//     city:"",
//     message:""
//   })
//   const [con, setCon] = useState([]);

//   const [message,setMessage]=useState({
//     data:"",
//     status:false
//   })
//   useEffect(() => {
//     setCon(JSON.parse(localStorage.getItem("contacts")))
//   }, [contact]);

  

 
  
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     const newArr = [...contactBook, contact];
//     setContactBook(newArr);
//     ///////////////////////////////////////////////////////////////////////
//     localStorage.setItem("contacts",JSON.stringify(newArr));
//     setMessage({
//       data:"Your message has been sent",
//       status:true
//     })
//     setContact({
//       fullname:"",
//       email:"",
//       city:"",
//       message:""
//     })
    
//   }
//   return (
//     <div className="container">
//       {
//         message.status?
//         <div className="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Messgae : </strong> {message.data}
//   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>:null
//       }

// <form className="row g-3 w-50" onSubmit={handleSubmit}>
//   <div className="col-md-12">
//     <label htmlFor="fullname" className="form-label">Full Name</label>
//     <input type="text" onChange={(event)=>setContact({...contact,fullname:event.target.value})} value={contact.fullname} className="form-control" id="fullname" />
//   </div>
//   <div className="col-md-12">
//     <label htmlFor="email" className="form-label">Email</label>
//     <input type="text" onChange={(event)=>setContact({...contact,email:event.target.value})} value={contact.email} className="form-control" id="email" />
//   </div>
  
  
//   <div className="col-md-12">
//     <label htmlFor="city" className="form-label">City</label>
//     <input type="text" onChange={(event)=>setContact({...contact,city:event.target.value})} value={contact.city} className="form-control" id="city" />
//   </div>
//   <div className="col-12">
//   <label htmlFor="message" className="form-label">Message</label>
//   <textarea className="form-control" onChange={(event)=>setContact({...contact,message:event.target.value})} value={contact.message} id="message" rows="3"></textarea>
// </div>
// <div className="col-12">
//     <button type="submit" className="btn btn-primary">Sign in</button>
//   </div>
// </form>
// <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">fullName</th>
//       <th scope="col">Email</th>
//       <th scope="col">City</th>
//       <th scope="col">Message</th>
//     </tr>
//   </thead>
//   <tbody>
// {
//   con.map((item,index)=>{
//     return(
//       <tr key={index}>
//         <td>{item.fullname}</td>
//         <td>{item.email}</td>
//         <td>{item.city}</td>
//         <td>{item.message}</td>
//       </tr>
//     )
//   })
// }

//     {/* {
//       con.map((val=>{
//         return<tr>
//         <th scope="row">{con.fullname}</th>
//         <td>{con.email}</td>
//         <td>{con.city}</td>
//         <td>{con.message}</td>
//       </tr>
//       }))
//     } */}
//       {/* {
//         con.map((val=>{
//           return
//           <tr>
//         <td>{val.fullname}</td>
//         <td>{val.email}</td>
//         <td>{val.city}</td>
//         <td>{val.message}</td>
//         </tr>
//         }))
//       } */}
//   </tbody>
// </table>
        
//     </div>
//   )
// }

// export default Contact
