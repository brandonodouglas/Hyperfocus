import { useState, button } from 'react'
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';


function Routine(props) {


  const [routineName, setRoutineName] = useState(props.name)
  const [descriptionText, setDescriptionText] = useState(props.description)
  const [showEditInput, setShowEditInput] = useState(false);
  const [newRoutineName, setNewRoutineName] = useState('');
  const [newDescriptionText, setNewDescriptionText] = useState('');
  // Now todoist uses a max depth of 4 for subtasks
  function handleClick() {
    alert('You clicked me!');
  }

  function handleEditClick() {
    setShowEditInput(true)
  }

  function addSubtask() {
    alert("New subtasks created.")
  }

  if (showEditInput) {
    return (<div>
      <p>Editing Routine Called: {props.name}</p>
      <input placeholder="New Routine Name" style={{width: '50%'}}  onChange={e => setRoutineName(e.target.value)}></input><br></br>
      <input placeholder="New Description Name" style={{width: '50%'}}  onChange={e => setDescriptionText(e.target.value)}></input>
      <br></br>

      <button onClick={() => {setShowEditInput(false)}}>submit</button> <button>cancel</button>

    </div>); 

  } else {
    return (
      <div style={{ display: 'flex', margin: '10px', border: 'grey', borderStyle: 'solid', borderWidth: '1px' }}><br></br><button onClick={handleClick} style={{ borderStyle: 'solid', borderWidth: '1px', width: '800px', alignItems: 'left', paddingLeft: '80px' }}><p style={{ textAlign: 'left', paddingLeft: '20px', fontSize: '20px', color: 'black' }}>{routineName}</p><p style={{ textAlign: 'left', paddingLeft: '20px', color: 'darkgrey', fontSize: '15px' }}>{descriptionText}</p></button><br></br>
        <button onClick={handleEditClick} style={{ margin: '6px', fontSize: '20px' }}><FaPen />Edit</button>
        <button style={{ margin: '6px', fontSize: '20px' }}><FaTrash />Delete</button>
        <button onClick={addSubtask} style={{ margin: '6px', fontSize: '20px' }}><FaPlusCircle /><br></br>Subtask</button>
      </div>
    );

  }

}

export default Routine;
