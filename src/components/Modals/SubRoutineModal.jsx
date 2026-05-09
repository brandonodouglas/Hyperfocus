import { useState, useEffect, useRef, button } from 'react'
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import Stopwatch from '../TimerRelated/Stopwatch';
import MyTimer from '../TimerRelated/MyTimer';


function SubRoutineModal({ openModal, closeModal, children }) {
  const ref = useRef();
  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
  return (<dialog style={{ width: '80%', height: '80%' }} ref={ref} onCancel={closeModal}>{children}<button style={{backgroundColor: 'red'}} onClick={closeModal}>close</button></dialog>);
}

export default SubRoutineModal;
