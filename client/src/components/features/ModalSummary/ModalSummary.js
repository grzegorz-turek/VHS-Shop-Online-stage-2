import React from 'react';
import Button from '../../common/Button/Button';
import './ModalSummary.scss';

const ModalSummary = (props) => (
  <div className='modal-summary'>
    <h1>Congratulations!</h1>
    <p>You have just confirmed your purchase.</p>
    <p>{`Total amount due is ${props.cartTotalDiscount > 0 ? (props.cartTotalCash * (100 - props.cartTotalDiscount) / 100).toFixed(2) : props.cartTotalCash.toFixed(2)} PLN`}</p>
    <Button variant='primary' onClick={() => props.closeModal()}>Proceed Payment</Button>
  </div>
);

export default ModalSummary;