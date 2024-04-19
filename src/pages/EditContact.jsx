import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"



function EditContact() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [contact,setContact]=useState({
        fullname:"",
        email:""
      })
      useEffect(() => {
        //logic to fetch contact by id
        let storedContacts = JSON.parse(localStorage.getItem("contact"))
        let con = storedContacts.find(c => c.id == id)
        setContact(con)
      },[])



    const handleUpdate = (e) =>{
        //logic to update contact
        e.preventDefault()
        let storedContacts = JSON.parse(localStorage.getItem("contact"))
        let filteredArr = storedContacts.filter(contact => contact.id != id)
        let updatedArr = [...filteredArr,contact]
        localStorage.setItem("contact", JSON.stringify(updatedArr))
        navigate("/contact")
    }
  return (
   <form className="row g-3 w-50" onSubmit={handleUpdate}>
  <div className="col-md-12">
    <label htmlFor="fullname" className="form-label">Full Name</label>
    <input type="text" onChange={(event)=>setContact({...contact,fullname:event.target.value})} value={contact.fullname} className="form-control" id="fullname" />
  </div>
  <div className="col-md-12">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" onChange={(event)=>setContact({...contact,email:event.target.value})} value={contact.email} className="form-control" id="email" />
  </div>
  
<div className="col-12">
    <button type="submit" className="btn btn-primary">Update Contact</button>
  </div>
</form>
  )
}

export default EditContact