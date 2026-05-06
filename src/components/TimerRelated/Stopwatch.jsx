import { useState, button } from 'react'
import { FaPlay } from 'react-icons/fa';


function Stopwatch(props) {
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
    // Now todoist uses a max depth of 4 for subtasks
    function stopwatchStart() {
        const id = setInterval(() => {
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
                console.log("Hello")
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
                console.log('60 seconds elapsed.')
                setPaddingSeconds("0")
                tempMinutes += 1;
                setMinutes(minutes => minutes + 1)
                setSeconds(0)
                tempSeconds = 0

            }
            if (tempMinutes % 60 == 0 && tempMinutes !== 0) {
                console.log("1 hour elapsed")
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
                console.log("Max time alapsed.")
                setSeconds(0)
                tempSeconds(0)
                setMinutes(0)
                tempMinutes(0)
                setHours(0)
                tempHours(0)
                clearInterval(id)
            }
        }, 1000)
    }
    return (<><p style={{ color: 'white', fontSize: '40px', marginTop: '30px' }}>{paddingHours}{hours}:{paddingMinutes}{minutes}:{paddingSeconds}{seconds}</p><br></br><button onClick={stopwatchStart}><FaPlay color='black' /></button></>);
}

export default Stopwatch;
