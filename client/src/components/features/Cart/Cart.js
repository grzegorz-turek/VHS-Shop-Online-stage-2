import React from 'react';
import CartItemList from '../CartItemList/CartItemListContainer';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Modal from '../../features/Modal/Modal';
import ModalSummary from '../../features/ModalSummary/ModalSummary';
import Button from '../../common/Button/Button';
import './Cart.scss';

class Cart extends React.Component {

    state = { modal: false }

    componentDidMount() {
        this.props.countCartPcs(this.props.cart);
        this.props.countCartCash(this.props.cart);
    }
    
    closeModal = () => {
        this.setState({ modal: false });
    }
    
    openModal = () => {
        this.setState({ modal: true });
    }

    clickHandlePlus = async(id, cart) => {
        await this.props.addToCart(id, cart);
        this.props.countCartPcs(cart);
        this.props.countCartCash(cart);
    }

    clickHandleMinus = async(id, cart) => {
        await this.props.removeFromCart(id, cart);
        this.props.countCartPcs(cart);
        this.props.countCartCash(cart);
    }

    clickHandleX = async(id, cart) => {
        await this.props.removeProductFromCart(id, cart);
        this.props.countCartPcs(this.props.cart);
        this.props.countCartCash(this.props.cart);
    }

    handleKeyDown = async e => {
        if (e.key === 'Enter') {
            this.props.discountSubmit(e.target.value, this.props.discountsDB);
        }
    };

    render() {

        if (this.state.modal) {
            return (
                <Modal cart={this.props.cart} closeModal={this.closeModal}>
                <ModalSummary cart={this.props.cart} cartTotalDiscount={this.props.cartTotalDiscount} cartTotalCash={this.props.cartTotalCash} closeModal={this.closeModal} />
            </Modal>
            )
        }

        if (!this.props.request.pending && this.props.request.success && this.props.cart.length > 0) {
            return (
                <div className='cart'>
                    <h2 className='cart__single-items-title'>Your cart</h2>
                    <CartItemList clickHandlePlus={this.clickHandlePlus} clickHandleMinus={this.clickHandleMinus} clickHandleX={this.clickHandleX} cart={this.props.cart} />
                    <h2 className='cart__summary-title'>Your cart summary</h2>
                    <div className='cart__summary'>
                        <span className='cart__summary__discount-input-label'>{`try bfd or vd + <Enter> `}</span><input type='text' id='discountCodeId' name='discountCode' placeholder='your discount code' onKeyDown={this.handleKeyDown}/>
                        <p>{`Discount value: ${this.props.cartTotalDiscount} %`}</p>
                        <p>{`Total: ${this.props.cartTotalDiscount > 0 ? (this.props.cartTotalCash * (100 - this.props.cartTotalDiscount) / 100).toFixed(2) : this.props.cartTotalCash.toFixed(2)} PLN`}</p>
                        <Button className='cart__summary__buttons' variant='primary' onClick={() => this.openModal()}>Buy Now</Button>
                    </div>
                </div>
            )
        }

        if (this.props.request.pending || this.props.request.success === null) {
            return (
                <div>
                    <Spinner />
                </div>
            )
        }

        if (!this.props.request.pending && this.props.request.error !== null) {
            return (
                <div>
                    <Alert variant='error'>{this.props.request.error}</Alert>
                </div>
            )
        }
        
        if(!this.props.request.pending && this.props.request.success && this.props.cart.length === 0) {
            return (
                <div>
                    <Alert variant='info'>Cart empty</Alert>
                </div>
            )
        }
    }
}

export default Cart;