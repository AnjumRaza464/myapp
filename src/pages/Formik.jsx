
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from "react-redux";
import { addToContacts, deleteContact } from "../features/contact/contactSlice";


export const Formik = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contact.contacts)
    const notify = () => toast("Data has been saved!");
   
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        fullname: "",
        email: "",
        contact: "",
      },
      validationSchema: Yup.object({
        fullname: Yup.string().required("Required fullname"),
        email: Yup.string()
          .matches(
            /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please fill a valid email address"
          )
          .required("Required email"),
        contact: Yup.string()
          .required("Required contact")
          .matches(
            /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
            "Please fill a valid contact number"
          ),
      }),
      onSubmit: (vals) => {
        let newContact = {
            ...vals,
            id: Date.now()
          }
        dispatch(addToContacts(newContact))
          notify()
      },
    });
    
      const handleDelete = (id) =>{
        dispatch(deleteContact(id))
       notify()
      }
  return (
    <form className="row g-3 w-50" onSubmit={handleSubmit}>
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          fullname
        </label>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullname}
          className="form-control"
          id="fullname"
          name="fullname"
        />
        <p className="text-danger">
          {errors.fullname && touched.fullname ? errors.fullname : null}
        </p>
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPassword4" className="form-label">
          email
        </label>
        <input
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="form-control"
          id="email"
          name="email"
        />
        <p className="text-danger">
          {errors.email && touched.email ? errors.email : null}
        </p>
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          contact
        </label>
        <input
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.contact}
          className="form-control"
          id="contact"
          name="contact"
        />
        <p className="text-danger">
          {errors.contact && touched.contact ? errors.contact : null}
        </p>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

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
          <button className="btn btn-danger me-2" onClick={()=>handleDelete(item.id)}><i className="bi bi-trash3-fill"></i></button>
        <Link to={`/edit/${item.id}`} className="btn btn-warning me-2"><i className="bi bi-pencil"></i></Link>
          </td>  
      </tr>
    )
  })
}
 </tbody>
  <ToastContainer />
</table>
      </div>
    </form>
  );
};















////////////////////////////////////////////////////////////////////////////




// import { useFormik } from "formik";
// import * as Yup from "yup";
// // import { Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from "react"

// export const Formik = () => {
//     const notify = () => toast("Data has been saved!");
//     const [contacts, setContacts] = useState([])
//   const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
//     useFormik({
//       initialValues: {
//         fullname: "",
//         email: "",
//         contact: "",
//       },
//       validationSchema: Yup.object({
//         fullname: Yup.string().required("Required fullname"),
//         email: Yup.string()
//           .matches(
//             /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
//             "Please fill a valid email address"
//           )
//           .required("Required email"),
//         contact: Yup.string()
//           .required("Required contact")
//           .matches(
//             /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
//             "Please fill a valid contact number"
//           ),
//       }),
//       onSubmit: (vals) => {
//         let newContact = {
//             ...vals,
//             id: Date.now()
//           }
//           contacts.push(newContact)
//           localStorage.setItem("contact",JSON.stringify(contacts))
//           notify()
//       },
//     });
//     useEffect(() => {
//         let storedContacts = localStorage.getItem("contact")
//         storedContacts = JSON.parse(storedContacts)
//         if(storedContacts != null){
//           setContacts(storedContacts)
//         }
    
//       }, []);
//       const handleDelete = (id) =>{
//         let contactArr = JSON.parse(localStorage.getItem("contact"))
//         let filteredArr = contactArr.filter(contact => contact.id != id)
//         localStorage.setItem("contact", JSON.stringify(filteredArr))
//       }
//   return (
//     <form className="row g-3 w-50" onSubmit={handleSubmit}>
//       <div className="col-md-12">
//         <label htmlFor="inputEmail4" className="form-label">
//           fullname
//         </label>
//         <input
//           type="text"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.fullname}
//           className="form-control"
//           id="fullname"
//           name="fullname"
//         />
//         <p className="text-danger">
//           {errors.fullname && touched.fullname ? errors.fullname : null}
//         </p>
//       </div>
//       <div className="col-md-12">
//         <label htmlFor="inputPassword4" className="form-label">
//           email
//         </label>
//         <input
//           type="email"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.email}
//           className="form-control"
//           id="email"
//           name="email"
//         />
//         <p className="text-danger">
//           {errors.email && touched.email ? errors.email : null}
//         </p>
//       </div>
//       <div className="col-12">
//         <label htmlFor="inputAddress" className="form-label">
//           contact
//         </label>
//         <input
//           type="number"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.contact}
//           className="form-control"
//           id="contact"
//           name="contact"
//         />
//         <p className="text-danger">
//           {errors.contact && touched.contact ? errors.contact : null}
//         </p>
//       </div>
//       {/* <div className="col-12">
//     <label htmlFor="inputAddress2" className="form-label">Address 2</label>
//     <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
//   </div>
//   <div className="col-md-6">
//     <label htmlFor="inputCity" className="form-label">City</label>
//     <input type="text" className="form-control" id="inputCity" />
//   </div> */}
//       {/* <div className="col-md-4">
//     <label htmlFor="inputState" className="form-label">State</label>
//     <select id="inputState" className="form-select">
//       <option selected>Choose...</option>
//       <option>...</option>
//     </select>
//   </div> */}
//       {/* <div className="col-md-2">
//     <label htmlFor="inputZip" className="form-label">Zip</label>
//     <input type="text" className="form-control" id="inputZip">
//   </div>
//   <div className="col-12">
//     <div className="form-check">
//       <input className="form-check-input" type="checkbox" id="gridCheck">
//       <label className="form-check-label" htmlFor="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div> */}
//       <div className="col-12">
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>

//         <table className="table">   
// <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">fullName</th>
//       <th scope="col">Email</th>
//       <th scope="col">Actions</th>
//     </tr>
//   </thead>
//   {/* <tbody> {
//   contacts.length < 1 ? <tr><td><h1>Data not found</h1></td></tr>:
//   contacts.map((item,index)=>{
//     return(
//       <tr key={index}>
//         <th scope="row">{index+1}</th>
//         <td>{item.fullname}</td>
//         <td>{item.email}</td>
//         <td>
//           <button className="btn btn-danger me-2" onClick={()=>handleDelete(item.id)}><i className="bi bi-trash3-fill"></i></button>
//         <Link to={`/edit/${item.id}`} className="btn btn-warning me-2"><i className="bi bi-pencil"></i></Link>
//         <button className="btn btn-success me-2"><i className="bi bi-telephone-inbound"></i></button>
//         </td>  
//       </tr>
//     )
//   })
// }
//  </tbody> */}
//   <ToastContainer />
// </table>
//       </div>
//     </form>
//   );
// };












////////////////////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////
///////////////////////////
////////////////////
///////////////
///////////
///////
/////

// import { useFormik } from "formik";
// import * as Yup from "yup";

// export const Formik = () => {
//   const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
//     useFormik({
//       initialValues: {
//         fullname: "",
//         email: "",
//         contact: "",
//       },
//       validationSchema: Yup.object({
//         fullname: Yup.string().required("Required fullname"),
//         email: Yup.string()
//           .matches(
//             /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
//             "Please fill a valid email address"
//           )
//           .required("Required email"),
//         contact: Yup.string()
//           .required("Required contact")
//           .matches(
//             /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
//             "Please fill a valid contact number"
//           ),
//       }),
//       onSubmit: (vals) => {
//         console.log(vals);
//       },
//     });
//   return (
//     <form className="row g-3 w-50" onSubmit={handleSubmit}>
//       <div className="col-md-12">
//         <label htmlFor="inputEmail4" className="form-label">
//           fullname
//         </label>
//         <input
//           type="text"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.fullname}
//           className="form-control"
//           id="fullname"
//           name="fullname"
//         />
//         <p className="text-danger">
//           {errors.fullname && touched.fullname ? errors.fullname : null}
//         </p>
//       </div>
//       <div className="col-md-12">
//         <label htmlFor="inputPassword4" className="form-label">
//           email
//         </label>
//         <input
//           type="email"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.email}
//           className="form-control"
//           id="email"
//           name="email"
//         />
//         <p className="text-danger">
//           {errors.email && touched.email ? errors.email : null}
//         </p>
//       </div>
//       <div className="col-12">
//         <label htmlFor="inputAddress" className="form-label">
//           contact
//         </label>
//         <input
//           type="number"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.contact}
//           className="form-control"
//           id="contact"
//           name="contact"
//         />
//         <p className="text-danger">
//           {errors.contact && touched.contact ? errors.contact : null}
//         </p>
//       </div>
//       {/* <div className="col-12">
//     <label htmlFor="inputAddress2" className="form-label">Address 2</label>
//     <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
//   </div>
//   <div className="col-md-6">
//     <label htmlFor="inputCity" className="form-label">City</label>
//     <input type="text" className="form-control" id="inputCity" />
//   </div> */}
//       {/* <div className="col-md-4">
//     <label htmlFor="inputState" className="form-label">State</label>
//     <select id="inputState" className="form-select">
//       <option selected>Choose...</option>
//       <option>...</option>
//     </select>
//   </div> */}
//       {/* <div className="col-md-2">
//     <label htmlFor="inputZip" className="form-label">Zip</label>
//     <input type="text" className="form-control" id="inputZip">
//   </div>
//   <div className="col-12">
//     <div className="form-check">
//       <input className="form-check-input" type="checkbox" id="gridCheck">
//       <label className="form-check-label" htmlFor="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div> */}
//       <div className="col-12">
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };
