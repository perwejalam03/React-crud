import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import style from "./home.module.css"

const Editusers=()=>{

    let [name, setName]=useState("")
    let [salary, setSalary]=useState("")
    let [company, setCompany]=useState("")

    let {index} = useParams()
    console.log(index);

    let nameData =(e)=>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    let salaryData =(e)=>{
        console.log(e.target.value);
        setSalary(e.target.value)
    }
    let companyData =(e)=>{
        console.log(e.target.value);
        setCompany(e.target.value)
    }
    let abc = useNavigate()

    let formHandle = (e)=>{
        e.preventDefault()
        let payload = {name, salary, company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{console.log("data has been updated");})
        .catch(()=>{console.log("data has not updated");})
        abc("/users")
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((response)=>{
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        }).catch(()=>{
            console.log("Went Wrong");
        })
    },[])

    return(
        <div id={style.myform}>
            <form action="">
                <h1>UPDATE USER</h1>
                <label htmlFor="">Name : </label>
                <input type="text" value={name} onChange={nameData}/><br />
                <label htmlFor="">Salary : </label>
                <input type="number" value={salary} onChange={salaryData}/><br />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={companyData}/><br />
                <button onClick={formHandle}>Update</button>

            </form>
        </div>
    )
}
export default Editusers