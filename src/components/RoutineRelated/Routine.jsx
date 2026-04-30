import { useState, button } from 'react'



function Routine(props) {
  // When a routine is pressed, pop up the bigger form where you can add subtasks
    function handleClick() {
    alert('You clicked me!');
  }
  return (
    <div style={{display: 'flex', backgroundColor: 'darkgrey', borderTop: '20px', borderTopColor: 'red', borderTopStyle: 'solid', borderTopWidth: '10px'}}><br></br><button onClick={handleClick} style={{backgroundColor: 'transparent', borderStyle: 'none', alignItems:'left', paddingLeft: '50px'}}><hr></hr><p style={{textAlign: 'left', paddingLeft: '20px', fontSize: '20px'}}>{props.name}</p><p style={{textAlign: 'left', paddingLeft: '20px', fontSize: '10px'}}>{props.description}</p></button><br></br></div>

  );
}

export default Routine;
