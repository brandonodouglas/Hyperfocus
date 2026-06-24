import React, { useState, button, input } from 'react'
import Routine from '../RoutineRelated/Routine'
import { FaTrash } from 'react-icons/fa';
import Stopwatch from '../TimerRelated/Stopwatch'
import SubRoutineModal from "../Modals/SubRoutineModal"
import SubRoutine from './SubRoutine';
import MonthlyCalendar from '../FullCalendar2/MonthlyCalendar'
import Category from '../RoutineRelated/Category'
import { ListBox } from 'primereact/listbox';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';




let nextId = 0;
let nextId2 = 0;
let counter = 0;

let presetRoutineData = ["Cooking", "Breakfast", "Shower Routine", "Sleep", "Tidy Room", "Life Admin", "Procastrinating", "Finance Admin", "NeoVim Learning", "Coding", "Journaling", "Coding", "Tidy Room", "Gym", "Theology Studies"];





function RoutineForm(itmes) {
    const [routineText, setRoutineText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [showForm, setShowForm] = useState(false)
    const [routines, setRoutines] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [deleteRoutine, setDeleteRoutine] = useState(false)
    // For the subroutine stuff
    const [modal, setModal] = useState(false);

    const [selectedRoutine, setSelectedRoutine] = useState(null);
    const navigate = useNavigate();
    const presetRoutines = [
        { name: 'Cooking', code: 'NY' },
        { name: 'Coding', code: 'RM' },
        { name: 'Gym Workout', code: 'LDN' },
        { name: 'Theology Studies', code: 'IST' },
        { name: 'Tidy Room', code: 'PRS' }
    ];


    // Primereac list stufff

    // Process preset routines and catgeories


    return (
        <>
            
                <h1>My Routines</h1>
            <p>Welcome to the categories or routines page</p>
            <p>👉 Use the text input to add new routines OR click on a routine to get started adding tasks to it. </p>
            <div className="card flex justify-content-center">  
            <ListBox value={selectedRoutine}  onChange={(e) => {navigate("/categories/" + e.value.name)}} options={presetRoutines} optionLabel="name" className="w-full md:w-14rem" />
        </div>

        
          

            
        </>
    )


    /*
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
                        <Routine key={routine.id} name={routine.routineName} description={routine.descriptionName} />


                    ))}
                    
                </div>
            </> 
        );
        */



}

export default RoutineForm;
