import { useState, button } from 'react'
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import Stopwatch from '../TimerRelated/Stopwatch';
import MyTimer from '../TimerRelated/MyTimer';
import SubRoutineModal from '../Modals/SubRoutineModal';

let subtaskid = 0;

function Routine(props) {
  const [routineName, setRoutineName] = useState(props.name)
  const [descriptionText, setDescriptionText] = useState(props.description)
  const [showEditInput, setShowEditInput] = useState(false);
  const [newRoutineName, setNewRoutineName] = useState('');
  const [newDescriptionText, setNewDescriptionText] = useState('');
  const [deleteRoutine, setDeleteRoutine] = useState(false);
  const [modal, setModal] = useState(false);
  // Sub routine information
  const [subTaskArray, setSubTaskArray] = useState([]);
  const [subTaskName, setSubTaskName] = useState('');
  const [subTaskDescription, setSubTaskDescription] = useState('');
  const [showRoutineForm, setShowRoutineForm] = useState(false)



  // Method to display the subtasks in the array with maximum depth of 4
  function displaySubTaskArray() {
    console.log("Yet to be implemented");
  }
  function handleModalAddSubtask() {
    setShowRoutineForm(true)
  }
  // Now todoist uses a max depth of 4 for subtasks
  function handleClick() {
    setModal(true)
  }
  function handleEditClick() {
    setShowEditInput(true)
  }
  function handleDeleteClick() {
    setDeleteRoutine(true)
  }
  function addSubtask() {
    alert("New subtasks created.")
  }
  if (!deleteRoutine) {
    if (showEditInput) {
      return (<div>
        <p>Editing Routine Called: {props.name}</p>
        <input placeholder="New Routine Name" style={{ width: '50%' }} onChange={e => setRoutineName(e.target.value)}></input><br></br>
        <input placeholder="New Description Name" style={{ width: '50%' }} onChange={e => setDescriptionText(e.target.value)}></input>
        <br></br>
        <button onClick={() => { setShowEditInput(false) }}>submit</button><button>cancel</button>
      </div>);
    } else {
      if (!showRoutineForm) {
        return (
          <div style={{ display: 'flex', margin: '10px', border: 'grey', borderStyle: 'solid', borderWidth: '1px' }}><br></br><button onClick={handleClick} style={{ borderStyle: 'solid', borderWidth: '1px', width: '800px', alignItems: 'left', background: 'none', color: 'white', paddingLeft: '80px' }}><p style={{ textAlign: 'left', paddingLeft: '20px', fontSize: '20px', color: 'white' }}>{routineName}</p><p style={{ textAlign: 'left', paddingLeft: '20px', color: 'darkgrey', fontSize: '15px' }}>{descriptionText}</p></button><br></br>
            <button onClick={handleEditClick} style={{ margin: '6px', fontSize: '20px', background: 'none', color: 'white' }}><FaPen /><br></br>Edit</button>
            <button onClick={handleDeleteClick} style={{ margin: '6px', fontSize: '20px', background: 'none', color: 'white' }}><FaTrash /><br></br>Delete</button>
            <button onClick={addSubtask} style={{ margin: '6px', fontSize: '20px', background: 'none', color: 'white' }}><FaPlusCircle color='white' /><br></br>Add Subtask</button>
            <Stopwatch />
            <SubRoutineModal
              openModal={modal}
              closeModal={() => setModal(false)}>
              <div style={{ textAlign: 'left' }}>
                <p>{routineName}</p>
                <p>{descriptionText}</p>
              </div>
              <hr></hr>
              <button onClick={handleModalAddSubtask}><span style={{ fontSize: '30px' }}><FaPlusCircle color='white' size={20} /> Add Subtask</span></button>
              <br></br>
            </SubRoutineModal>
          </div>
        );
      } else {
        return (
          <div style={{ display: 'flex', margin: '10px', border: 'grey', borderStyle: 'solid', borderWidth: '1px' }}><br></br><button onClick={handleClick} style={{ borderStyle: 'solid', borderWidth: '1px', width: '800px', alignItems: 'left', background: 'none', color: 'white', paddingLeft: '80px' }}><p style={{ textAlign: 'left', paddingLeft: '20px', fontSize: '20px', color: 'white' }}>{routineName}</p><p style={{ textAlign: 'left', paddingLeft: '20px', color: 'darkgrey', fontSize: '15px' }}>{descriptionText}</p></button><br></br>
            <button onClick={handleEditClick} style={{ margin: '6px', fontSize: '20px', background: 'none', color: 'white' }}><FaPen /><br></br>Edit</button>
            <button onClick={handleDeleteClick} style={{ margin: '6px', fontSize: '20px', background: 'none', color: 'white' }}><FaTrash /><br></br>Delete</button>
            <button onClick={addSubtask} style={{ margin: '6px', fontSize: '20px', background: 'none', color: 'white' }}><FaPlusCircle color='white' /><br></br>Add Subtask</button>
            <Stopwatch />

            <SubRoutineModal
              openModal={modal}
              closeModal={() => setModal(false)}>
              <div style={{ textAlign: 'left' }}>
                <p>{routineName}</p>
                <p>{descriptionText}</p>
              </div>
              <hr></hr>
 <ul>
                {subTaskArray.map(thesubtask => (
                  <li key={thesubtask.id}>{thesubtask.mysubtask}</li>
                ))}
              </ul>
              <p>Adding subtask to: {props.name}</p>
              <input placeholder="New subtask" style={{ width: '50%' }} value={subTaskName} onChange={e => setSubTaskName(e.target.value)}></input><br></br>
              <input placeholder="Subtask descriptione" style={{ width: '50%' }} value={subTaskDescription} onChange={e => setSubTaskDescription(e.target.value)}></input>
              <br></br>
             
              <button onClick={() => {
                setSubTaskArray([...subTaskArray, { id: subtaskid++, mysubtask: subTaskName, mydesc: subTaskDescription }])



              }}>submit subtask</button><button>cancel</button>
              <br></br>
            </SubRoutineModal>
          </div>
        );
      }
    }
  } else {
    return null;
  }
}
export default Routine;
