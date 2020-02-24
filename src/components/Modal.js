import React from 'react';

const Modal = (props) => {
  const showHideClass = props.show ? "modal modal--display" : "modal modal--hide";
  return (
    <div className={showHideClass}>
      <div className="modal-body">
        {props.children}
        <button className="button button--tile button--secondary" onClick={props.handleClose}><i className="fa fa-close"></i>Cerrar</button>
      </div>
    </div>
  )
}

export default Modal;