import React, {useState} from 'react'
import Layout from '../containers/Layout';

export default function Grade (){
    const [grade, setGrade] = useState(0)
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
        setResult(result)
    }
    return <Layout><h1>Grade폼</h1>
    
    
    <div>
    <label><b>Username</b></label>
    <input id = "userName" type="" /><br />

    <label htmlFor=""><b>kor score</b></label>
    <input id = "korScore" type="" /><br />

    <label htmlFor=""><b>eng score</b></label>
    <input id = "engScore" type="" /><br />

    <label htmlFor=""><b>math score</b></label>
    <input id = "mathScore" type="" /><br />

    <button onClick={()=>sum()}>확인</button>
    <div>결과<br/> {"이름 : " + userName}<br/> {"국어점수 : " + korScore}, {"영어점수 : " + engScore}, {"수학점수 : " + mathScore}</div>

    </div>
    

    
    
    </Layout>
}
;