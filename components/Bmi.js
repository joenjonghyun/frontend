import React, {useState} from "react";
import { memberBmi } from "../api";
import Layout from "../containers/Layout";
export default function Bmi (){

    const [inputs, setInputs] = useState({name : '', height : 0.0, weight : 0.0})
    const { name, weight, height } = inputs; // Object  Destructuring

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        console.log(` 사용자이름: ${JSON.stringify(bmiRequest)}`)
        memberBmi(bmiRequest)
        .then( res =>{alert(res.data)})
        .catch(err => console.log(`에러발생 : ${err}`))
        }
 

    return<Layout>
    <form>
    <h1>체지방측정</h1>
    

    <div>
    <label><b>Username</b></label>
    <input type="text" name="name" onChange={handleChange}/><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" name="height" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" name="weight" onChange={handleChange} /><br />
    <button onClick={handleClick}>BMI체크</button>
    </div> 
    </form>
    <div>결과<br/> 이름 : {name}<br/> 키 : {height}<br/> 몸무게 : {weight} </div>
   


    </Layout>
}
