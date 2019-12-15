import React from 'react';
import './Modal.scss';
import Button from '../../common/Button/Button';

const Modal = ({ children, closeModal }) => (
  <div className='modal__overlay'>
    <div className='modal__modal-window'>
      <Button variant='danger' style={{ float: 'right' }} onClick={closeModal}>x</Button>
      {children}
    </div>
  </div>
);

export default Modal;
