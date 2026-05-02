import { useState, button, input } from 'react'
import Routine from '../RoutineRelated/Routine'

let nextId = 0;
let nextId2 = 0;
let counter = 0;


function RoutineForm() {
    const [routineText, setRoutineText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [showForm, setShowForm] = useState(false)
    const [routines, setRoutines] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    if (!showForm) {
        return ( 
            <>
                <p>You currently have zero routines.</p>
                <p>Enter some tasks and subtasks below to get started! </p>
                <div style={{ alignContent: 'center', justifyContent: 'center' }}>
                    <button onClick={() => { setShowForm(true) }}> Add Routine </button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <br></br>
                <p>ROUTINE FORM.</p>
                <div className="center">
                    <input style={{ backgroundColor: 'white', color: 'black', width: '50%', fontSize: '20px' }} value={routineText} placeholder='Routine Name' onChange={e => setRoutineText(e.target.value)} />
                    <input style={{ backgroundColor: 'white', color: 'black', width: '50%', fontSize: '20px' }} value={descriptionText} placeholder='Description' onChange={e => setDescriptionText(e.target.value)} />
                    <br></br>
                    <button onClick={() => {
                        setRoutines([...routines, { id: nextId++, routineName: routineText, descriptionName: descriptionText }])
                    }}>
                        Add Routine
                    </button>
                    {routines.map(routine => (
                        <Routine key={routine.id} name={routine.routineName} description={routine.descriptionName}/>
                    ))}
                    
                </div>
                </>
        );
    }
}

export default RoutineForm;
