import "./AutoIncrementCounter.css";
import { useEffect, useState, useRef } from "react";

export default function AutoIncrementCounter() {
    const [counter, setCounter] = useState(0);
    const [pause, setPause] = useState(false);
    const intervalTimer = useRef(null);

    const toggleTimer = () => {
        if (pause) {
            clearInterval(intervalTimer.current);
        } else {
            intervalTimer.current = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
        }
        setPause((prevPause) => !prevPause);
    };

    const resetTimer = () => {
        clearInterval(intervalTimer.current);
        setCounter(0);
        setPause(false);
    };

    return (
        <div className="App">
            <h1>Counter</h1>
            <div>{counter}</div>
            <button onClick={toggleTimer}>{pause ? "Pause" : "Start"}</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}
