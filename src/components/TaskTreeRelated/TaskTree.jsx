import { useState, useEffect, button } from 'react'
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import Stopwatch from '../TimerRelated/Stopwatch';
import MyTimer from '../TimerRelated/MyTimer';
import SubRoutineModal from '../Modals/SubRoutineModal';
import { Tree } from './Tree';


function TaskTree() {
    const [children, setChildren] = useState([])
    const [rootNode, setRootNode] = useState(true)
    
    return (<p>[ ROOT NODE ]</p>)
}

export default TaskTree;
