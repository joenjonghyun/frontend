import React, {useState} from 'react'
import Layout from '../containers/Layout'
export default function Login (){
    const [id, setId] = useState("")
    const [pw, setPw] = useState(0)
    const [name, setName] = useState("")
    const res =()=>{
    let id = document.getElementById('id').value
    let pw = document.getElementById('pw').value
    let name = document.getElementById('name').value
    setId(id)
    setPw(pw)
    setName(name)
    }
    return <Layout><h1>로그인폼</h1>
  
    <div>
    <label><b>ID</b></label>
    <input id = "id"type=""/><br/>

    <label><b>Username</b></label>
    <input id = "name" type="" /><br />

    <label htmlFor=""><b>Password</b></label>
    <input id = "pw" type="" /><br />

    <button onClick={()=>res()}>Login</button><br />
    <label><input type="checkbox" />Remember me</label><br />
    </div>
    <div>아이디 : {id} 이름 : {name} 비밀번호 : {pw}</div>
    <div>
    <button>Cancel</button><br />
    <span>Forgot <a>password?</a></span>
    </div>
    </Layout>
    
    
    
}
;