import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUsers = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let navigate=useNavigate()
    
    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("Data has been uploaded")
            navigate("/users")
        }).catch(()=>{
            console.log("Something went wrong")
        })
       
    }
  return (
    <div id={style.myform}>
      <form action="">
        <label htmlFor="">NAME:</label>
        <input type="text" value={name} onChange={nameData}/><br />
        <label htmlFor="">SALARY:</label>
        <input type="number" value={salary} onChange={salaryData}/><br />
        <label htmlFor="">Company:</label>
        <input type="text" value={company} onChange={companyData}/><br />
        <button onClick={formHandle}>SUBMIT</button>
      </form>
    </div>
  )
}

export default CreateUsers