import { useState, button, useEffect } from 'react'
import { FaArrowCircleLeft, FaArrowCircleUp, FaPause, FaPlay, FaRegArrowAltCircleRight, FaStop } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';


function Stopwatch(props) {
    // Click counte for referencing timer states
    const [timerRunning, setTimerRunning] = useState(false)
    const [timerPaused, setTimerPaused] = useState(false)
    const [timerReset, setTimerReset] = useState(false)

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    // Used to keep track of the seconds value in the react state
    let tempSeconds = 0;
    let tempMinutes = 0;
    let tempHours = 0;
    // Pads the stopwatch values
    const [paddingSeconds, setPaddingSeconds] = useState("0")
    const [paddingMinutes, setPaddingMinutes] = useState("0")
    const [paddingHours, setPaddingHours] = useState("0")
    // For the useEffect stuff

    function startTimer() {
        setTimerRunning(true)

    }

    function pauseTimer() {
        setTimerPaused(true)
        setTimerRunning(false)
    }

    function resetTimer() {
        setTimerPaused(false)
        setTimerRunning(false)
        setTimerReset(true)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setPaddingSeconds(0)
        setPaddingMinutes(0)
        setPaddingHours(0)
        tempSeconds = 0;
        tempMinutes = 0;
        tempHours = 0;
    }

    useEffect(() => {
        if (timerRunning) {
            const interval = setInterval(() => {

                setSeconds(seconds => seconds + 1)
                if (tempSeconds == 0) {
                    setPaddingSeconds("0")
                }
                if (tempMinutes == 0) {
                    setPaddingMinutes("0")
                }
                if (tempHours == 0) {
                    setPaddingHours("0")
                }
                tempSeconds += 1
                if (!(tempSeconds >= 0 && tempSeconds <= 9)) {
                    setPaddingSeconds("")
                } else {
                    setPaddingSeconds("0")
                }
                if (!(tempMinutes >= 0 && tempMinutes <= 9)) {
                    setPaddingMinutes("")
                } else {
                    setPaddingMinutes("0")
                }
                if (!(tempHours >= 0 && tempHours <= 9)) {
                    setPaddingHours("")
                } else {
                    setPaddingHours("0")
                }
                // Ajust the seconds, minutes and hours based on stopwatch metadata
                if (tempSeconds % 60 == 0 && tempSeconds !== 0) {
                    setPaddingSeconds("0")
                    tempMinutes += 1;
                    setMinutes(minutes => minutes + 1)
                    setSeconds(0)
                    tempSeconds = 0

                }
                if (tempMinutes % 60 == 0 && tempMinutes !== 0) {
                    setPaddingMinutes("0")
                    tempHours += 1
                    tempMinutes = 0
                    setSeconds(0)
                    tempSeconds = 0
                    setMinutes(0)
                    setHours(hours => hours + 1)
                }
                if (tempHours == 99) {
                    // Reset the timer values
                    setSeconds(0)
                    tempSeconds(0)
                    setMinutes(0)
                    tempMinutes(0)
                    setHours(0)
                    tempHours(0)
                    clearInterval(id)
                }
            }, 1000);
            return () => clearInterval(interval)
        }
    }, [timerRunning, timerPaused, timerReset]);
    if (!timerRunning && !timerPaused && !timerReset) {
        return (<><p>Click the start button to begin the timer 💪</p><p style={{ color: 'white', fontSize: '40px', marginTop: '30px' }}>{paddingHours}{hours}:{paddingMinutes}{minutes}:{paddingSeconds}{seconds}</p><br></br><button onClick={startTimer} ><FaPlay color='black' /></button></>);
    }
    if (timerPaused && timerRunning == false) {
        return (<><p>Timer paused.</p><p style={{ color: 'white', fontSize: '40px', marginTop: '30px' }}>{paddingHours}{hours}:{paddingMinutes}{minutes}:{paddingSeconds}{seconds}</p><br></br><button onClick={startTimer} ><FaPlay color='black' /></button><button onClick={resetTimer}><FaArrowRotateLeft color='black' /></button></>);
    }
    if (timerRunning) {
        return (<><p>Timer Running 🏃‍♂️</p><p style={{ color: 'white', fontSize: '40px', marginTop: '30px' }}>{paddingHours}{hours}:{paddingMinutes}{minutes}:{paddingSeconds}{seconds}</p><br></br><button onClick={pauseTimer}><FaPause color='black' /></button><button onClick={resetTimer} ><FaArrowRotateLeft color='black' /></button></>);
    }
    if (timerReset && !timerPaused && !timerRunning) {
        return (<><p>Timer has been reset.</p><p style={{ color: 'white', fontSize: '40px', marginTop: '30px' }}>{paddingHours}{hours}:{paddingMinutes}{minutes}:{paddingSeconds}{seconds}</p><br></br><button onClick={startTimer} ><FaPlay color='black' /></button></>);
    }
}
export default Stopwatch;
