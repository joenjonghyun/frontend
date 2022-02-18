import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Bmi (){
    const [bmi, setBmi] = useState(0)
    const [username, setUsername] = useState("/")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [result, setResult] = useState(0)
    const sum =() => {
        let username = document.getElementById('userName').value
        let height = document.getElementById('height').value
        let weight = document.getElementById('weight').value
        setUsername(username)
        setHeight(height)
        setWeight(weight)
        setResult (username, height, weight )
    }


    return<Layout><h1>Bmi폼</h1>
    

    <div>
    <label><b>Username</b></label>
    <input id = "userName" type=""/><br/>

    <label htmlFor=""><b>height</b></label>
    <input id = "height" type="" /> <br/>

    <label htmlFor=""><b>weight</b></label>
    <input id = "weight" type="" /><br/>

    <button onClick={()=>sum()}>확인</button>
    <div>결과 :{"이름 :" + username} , {"키 :" + height} , {"몸무게 :" + weight}</div>
    </div>
   


    </Layout>
}
