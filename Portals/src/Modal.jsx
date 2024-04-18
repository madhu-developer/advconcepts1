import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom';

export const Modal = ({show,onClose}) => {

    if(!show){
        return null
    }

  return (
    ReactDOM.createPortal(
    <div className="modal-overlay">
        <div class="content">
        <h1>Modal</h1>
        <div>
        <button onClick={onClose}>Close</button>
        </div>
    </div>
    </div>,document.getElementById('modal-root'))
  )
}
