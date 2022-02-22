import React, {useState} from 'react' 
import Layout from '../containers/Layout';
export default function Calc (){
    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const sum = () => {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        let opcode = document.getElementById('opcode').value
        setNum1(num1)
        setNum2(num2)
        setOpcode(opcode)
        switch(opcode){
            case "+" :
                return setResult(Number(num1) + Number(num2))
            case "-" :
                return setResult(Number(num1) - Number(num2))
            case "*" :
                return setResult(Number(num1) * Number(num2))
            case "/" :
                return setResult(Number(num1) / Number(num2))
            case "%" :
                return setResult(Number(num1) % Number(num2))
            default :
        }
    }

    return <Layout>
    <h1>Calc폼</h1>
    
    <div>
    
    <label><b>num1</b></label>
    <input id = "num1" type="" /><br />

    <label htmlFor=""><b>opcode</b></label>
    <select name="" id="opcode">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
    <option value="%">%</option>
    </select>
    <br />

    <label htmlFor=""><b>num2</b></label>
    <input id = "num2" type="" /><br />

    <button onClick={()=>sum()}>더하기 실행</button>
    <div>결과 : {num1} {opcode} {num2} = {result} </div>
    
    </div>
    </Layout>
}
