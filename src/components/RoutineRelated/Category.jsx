import { useState } from 'react'




function Category(props) {
    const shoot = () => {
    alert("Navigating to: " + props.name + 'page !');
  }
    return (<>
    <span style={{color: 'black', backgroundColor: 'azure', fontSize: '20px', borderStyle: 'solid', padding: '20px'}}>{props.name}</span>
    <button style={{color: "white", backgroundColor: 'red', borderColor: 'white', borderStyle: 'solid', fontWeight: 'bold', fontSize: '20px', margin: '20px', padding: '20px'}} title={props.name} onClick={shoot}>Add Tasks</button>
    </>

    )



}

export default Category;
