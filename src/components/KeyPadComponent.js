import React from 'react';

const KeyPad = (props) => {

        return (
            <div className="button">
                
                <button name="(" className="Ops" onClick={e => props.onClick(e.target.name)}>(</button>
                <button name=")" className="Ops" onClick={e => props.onClick(e.target.name)}>)</button>
                <button name="%" className="Ops" onClick={e => props.onClick(e.target.name)}>%</button>
                {!props.ac ? <button name="CE" className="Ops" onClick={e => props.onClick(e.target.name)}>CE</button> : <button name="AC" className="Ops" onClick={e => props.onClick(e.target.name)}>AC</button>}

                <button name="7" className="number" onClick={e => props.onClick(e.target.name)}>7</button>
                <button name="8" className="number" onClick={e => props.onClick(e.target.name)}>8</button>
                <button name="9" className="number" onClick={e => props.onClick(e.target.name)}>9</button>
                <button name="/" className="Ops" onClick={e => props.onClick(e.target.name)}>÷</button>
                

                <button name="4" className="number" onClick={e => props.onClick(e.target.name)}>4</button>
                <button name="5" className="number" onClick={e => props.onClick(e.target.name)}>5</button>
                <button name="6" className="number" onClick={e => props.onClick(e.target.name)}>6</button>
                <button name="*" className="Ops" onClick={e => props.onClick(e.target.name)}>x</button>
                


                <button name="1" className="number" onClick={e => props.onClick(e.target.name)}>1</button>
                <button name="2" className="number" onClick={e => props.onClick(e.target.name)}>2</button>
                <button name="3" className="number" onClick={e => props.onClick(e.target.name)}>3</button>
                <button name="-" className="Ops" onClick={e => props.onClick(e.target.name)}>-</button>
                



                <button name="0" className="number" onClick={e => props.onClick(e.target.name)}>0</button>
                <button name="." className="number" onClick={e => props.onClick(e.target.name)}>.</button>
                <button name="=" className="equalTo" onClick={e => props.onClick(e.target.name)}>=</button>
                <button name="+" className="Ops" onClick={e => props.onClick(e.target.name)}>+</button>
            </div>   
        )
}


export default KeyPad;
