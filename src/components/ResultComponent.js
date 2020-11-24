import React, {useState, useContext} from 'react';
import history_img from '../images/history_image_calc.JPG' 
import historyContext from '../context/historyContext'



const DisplayResult = (props) => {

    const { statbar,setResult, setPrev, setAc }= useContext(historyContext)

    let {result} = props;

    let [history_content,setHistory_content] = useState("")
    let [shHistory, setShHistory] = useState(false)

    const setResultfromHistory = (str) =>{
        setResult(str)
        setPrev(str)
        setAc(false)
    }

    const history = () => {
        setShHistory(!shHistory)
        setHistory_content(props.history.map( (item, index)=> {
            let keys = Object.keys(item)
            return (
                <div className="history-item" key={index}>
                <button onClick={() => setResultfromHistory(keys[0])}>{keys[0]}</button>
                <button onClick={() => setResultfromHistory(item[keys[0]])}>{item[keys[0]]}</button>
                </div>
                )
                }))
    }     
        
        return (
            <div className="result">
                <div className="history-content">{shHistory ? history_content : ''}</div>
                <button name="history" onClick={() => history()}><img src={history_img} alt="History" width="30" height="30"/></button>
                <p>{statbar}    </p>
                <p>{result}</p>
            </div>
    )
    }


export default DisplayResult;

