import "./AutoIncrementCounter.css"
import { useEffect, useState, useRef } from "react"

export default function AutoIncrementCounter() {
    const [counter, setCounter] =  useState(0);
    const [pause, setPause] =  useState(false);
    let intervalTimer  = useRef(null)

    const startTimer = () => {
        intervalTimer.current = setInterval(()=> {
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000)
        setPause(true)
    }

    const pauseTimer = () => {
        clearInterval(intervalTimer.current);
        setPause(false)
    }

    const resetTimer = () => {
        setPause(false);
        clearInterval(intervalTimer.current);
        setCounter(0);
    }

    return (
        <div className="App">
            <h1>Counter</h1>
            <div>{counter}</div>
            <button onClick={pause ? pauseTimer: startTimer}>{pause ? "Pause": "Start"}</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}