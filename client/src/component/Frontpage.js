import React, { useState, useEffect } from 'react'
import axios from "axios"
// import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Frontpage.css'

function App() {

  const [state, setState] = useState({
    name: "",
    age: "",
    userName: ""
  })

  // const [newstate, setnewState] = useState({
  //   id:""
  // })

  // const [modelforedit, setModelforedit] = useState(false)

  // const [documents, setDocuments] = useState([])
  const URL = "http://localhost:8000"

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  // useEffect(() => {
  //   axios.get(`${URL}/getUsers`)
  //     .then((res) => {
  //       // console.log(res.data)
  //       setDocuments(res.data)
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // }, [])



  const handleSubmit = e => {
    e.preventDefault();

    let formData = { ...state }
    console.log(formData)

    axios.post(`${URL}/createUser`, formData)
      .then(() => {
        console.log("A new user has been successfully added.")
        // alert("A NEW USER HAS BEEN CREATED")
        toast.success("User added Succesfullty!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(err => {
        console.error(err)
        toast.error("there is some error", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })

    // console.log(formData)
  }

//   const editmodel = (doc) =>{
//     setnewState({
//       // name: doc.name ,
//       // age: doc.age,
//       // userName: doc.userName,
//       id:doc.id
//     })




//     setModelforedit(true)
// // console.log("im clicked")
   
//   console.log(state)
 
//   }



  // const  update = e =>{
  //   e.preventDefault();
  //   let newData = { id: newstate._id,  name: "Ahmad", age: 25  }
   
    
  //   axios.put(`${URL}/updateUser`, newData)
  //     .then((res) => {
  //       console.log("message from server", res.data)
  //       alert("User has been successfully updated.")
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //       console.log(newData)
  //     })

  //     setModelforedit(false)
  //  }
  

  return (
    <div className="background">
     

      <form onSubmit={handleSubmit}>
      {/* <h1>ADD USER</h1> */}
      <label for="name">NAME</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br /><br />
        <label for="Age">AGE</label>
        <input type="number" name="age" placeholder="Age" onChange={handleChange} /><br /><br />
        <label for="username">USERNAME</label>
        <input type="text" name="userName" placeholder="User Name" onChange={handleChange} /><br /><br />
        <button >ADD USER</button>
      </form>
      <hr />



      <ToastContainer />
     
    </div>


  );
}

export default App;