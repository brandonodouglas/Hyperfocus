import { useState, button } from 'react'
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';


// Hours, minutes and seconds passed in as props
function MyTimer(props) {
  const [minutes, setMinutes] = useState(props.minutes)
  const [seconds, setSeconds] = useState(props.seconds)
  const [hours, setHours] = useState(props.hours)
  const [paddingSeconds, setPaddingSeconds] = useState("")
  const [paddingMinutes, setPaddingMinutes] = useState("")
  const [paddingHours, setPaddingHours] = useState("")
  const [validTimer, setValidTimer] = useState(true)








  // Now todoist uses a max depth of 4 for subtasks
  function handleClick() {
    alert('You clicked me!');
  }



  
  return (<><p>{paddingHours}{props.hours}:{paddingMinutes}{props.minutes}:{paddingSeconds}{props.seconds}</p></>);




}

export default MyTimer;
