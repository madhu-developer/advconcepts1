import React, { useState } from 'react'
import './App.css'
import { Modal } from './Modal';

const App = () => {
  const [show,setShow] = useState(false);
  const handleModal = () =>{
    setShow(!show)
  }

  return (
    <div className="app">
      <button className="modal-button" onClick={handleModal}>Open Modal</button>
      {show && <Modal onClose={()=>setShow(false)} show={show}></Modal>}
    </div>
  )
}

export default App