import React, {useState} from 'react'
import Layout from '../containers/Layout';

export default function Grade (){
    /*const [grade, setGrade] = useState(0)
    const [userName, setUsername] = useState("")
    const [korScore, setKorscore] = useState(0)
    const [engScore, setEngscore] = useState(0)
    const [mathScore, setMathscore] = useState(0)
    const [result, setResult] = useState(0)
    const sum =()=>{
        let userName = document.getElementById('userName').value
        let korScore = document.getElementById('korScore').value
        let engScore = document.getElementById('engScore').value
        let mathScore = document.getElementById('mathScore').value
        setUsername(userName)
        setKorscore(korScore)
        setEngscore(engScore)
        setMathscore(mathScore)
        setResult(result)}*/
        const [inputs, setInputs] = useState({})
        const {name, math, kr, en} = inputs
        const onChange = (e) =>{
            e.preventDefault()
            const {value, id} = e.target
            setInputs({
                ...inputs,
                [id] : value
            })
        }
        const onClick = (e) =>{
            e.preventDefault()
            const res = {name, math, kr, en}
            alert(`사용자 이름 : ${JSON.stringify(res)}`)
        }
    return <Layout><h1>성적표</h1>
    
    
    <div>
    <label htmlFor="">이름</label>
    <input type="text" onChange={onChange} id = "name" /><br/>

    <label htmlFor="">수학점수</label>
    <input type="text" onChange={onChange} id = "math" /><br/>

    <label htmlFor="">국어점수</label>
    <input type="text" onChange={onChange} id = "kr" /><br/>

    <label htmlFor="">영어점수</label>
    <input type="text" onChange={onChange} id = "en" /><br/>
    
    <button onClick={onClick}>RUN</button>
    <div>이름 : {name} 수학점수 : {math} 국어점수 : {kr} 영어점수 : {en} </div>
    </div>
    

    
    
    </Layout>
}
;