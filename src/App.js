import React, { useState} from 'react';
import './App.css';
import DisplayResult from './components/ResultComponent';
import KeyPad from "./components/KeyPadComponent";
import historyContext from './context/historyContext'

const App = () => {

    
    const [result,setResult] = useState("")
    let [prev, setPrev] = useState("")
    const [history,setHistory] = useState([])
    const [ac, setAc] = useState(false)
    const [statbar,setStatbar] = useState("Ans = 0")


    const op_arr = ['%','/','*','-','=','+']

    const onClick = (button) => {

        if(history.length > 0){
            let temp = history[history.length-1]
            let key = Object.keys(temp)
            key = key[0]
            setStatbar("Ans = " + temp[key])
            }


        if(button === "AC"){
            reset()
            setAc(false)
        } else if(prev === "=" && !op_arr.includes(button) ){
            setResult(button)
            setPrev(button)
            setAc(false)
        } else if(button === "="){
            if(result === "Error"){
             } else {
                console.log("=")
                calculate()
                setAc(true)
             }
        } else  if(button === "CE"){
            backspace()
        } else if(op_arr.includes(button) && (prev === button)){
            console.log("Error op_arr.includes(button) && (prev === button)")
        } else if(op_arr.includes(button) && op_arr.includes(prev)){
            console.log("Error op_arr.includes(button) && op_arr.includes(prev)")
            if(prev === "%" && op_arr.includes(button)){
                console.log("Error prev === % && op_arr.includes(button)")
                setResult(result+button)
                setPrev(button)
            } else {
            //     if(history.length>0)
            //     {
            //     let temp = history[history.length-1]
            //     let key = Object.keys(temp)
            //     key = key[0]
            // // console.log(button, prev,result)
            // if(temp[key] === result){
            //     console.log("temp[key] === result")
            //     setResult(result+button)
            //     setPrev(button)
            // } else {
            //     setResult(result.slice(0,-1)+button)
            //     setPrev(button)
            // }
            // } else 
            // {
                setResult(result.slice(0,-1)+button)
                setPrev(button)
            // }
            }
        } else if (prev === "Error"){
            setResult(button)
            setPrev(button)
        } else if(result === "Error"){
            setResult(button)
            setPrev(button)
        
        }else {
            setResult(result+button)
            setPrev(button)
        }
        
    };

    const calculate = () => {
        // console.log("Calculate")
        var checkResult = ''
        checkResult = result
        let checkResult_mod = checkResult.replace('%','*(1/100)')

        try {

            let temp1 = (eval(checkResult_mod)).toString()
            setStatbar(checkResult)
            setResult(temp1)
            setPrev("=")
            let obj = {}
            obj[checkResult] = temp1
            setHistory([...history,obj])

        } catch (e) {
            console.log("Catch Error")
            setResult("Error")
            setPrev("Error")
            let obj = {}
            obj[checkResult] = "Error"
            setHistory([...history,obj])

        }
    };

    const reset = () => {
        setResult("")
    };

    const backspace = () => {

        // console.log(typeof(result))
        if (result === ("Error") || result === "Infinity" ){
            console.log("")
            setResult("")
        } else {
            let temp = result.slice(0,-1)
            temp = temp[temp.length-1]
        setResult(result.slice(0, -1))
        setPrev(temp)
        }
    };

    
        return (
            <historyContext.Provider value={{statbar,setResult,setPrev,setAc}}>
                <div className="calculator-body">
                    <h1>Google Calculator</h1>
                    <DisplayResult 
                    onClick={onClick} 
                    result={result} 
                    history={history}
                    />
                    <KeyPad
                    ac = {ac} 
                    onClick={onClick}/>
                </div>
            </historyContext.Provider>
        );
    
}

export default App;
