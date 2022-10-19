import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';
import light from './light.png'
import dark from './dark.png'



const MainComp = () => {
    const [counterNum, setCounterNum] = useState(0)
    const [isLit, setLit] = useState(true);

    const changeTheme = () => {
        setLit(!isLit)
    
    }
    return(
        <div className={`main-cont ${(isLit)? "lit":"dark"}`}>
             <div className='change-theme'>
                <img src={(isLit)? dark: light} alt="light mode" onClick={changeTheme} title = "Change Theme" className='theme' height="40" />

            </div>
            

            <div className='main-head'>
                {/* <h1>counter app</h1> */}
            </div>
            <div className='counter-num'>
                <p>{counterNum}</p>

            </div>
            <div className='btns'>
                <div className='add-btn'>
                    <button onClick={() => setCounterNum(counterNum + 1)}>
                        Add One
                    </button>
                </div>

                <div className='minus-btn'>
                    <button onClick={() => setCounterNum(counterNum - 1)}>
                        Subtract One
                    </button>
                </div>

            </div>

            <div className='reset-btn'>
            <button onClick={() => setCounterNum(0)}>
                        Reset Value
                    </button>


            </div>
        </div>
    )
}







ReactDOM.render(<MainComp/>,document.querySelector("#root"))



