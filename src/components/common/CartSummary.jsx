import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './CartSummary.css';

const CartSummary = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems, getTotalItems, getTotalAmount, getCartSummary } = useCart();

    const totalItems = getTotalItems();
    const totalAmount = getTotalAmount();
    const { subtotal, deliveryFee, total } = getCartSummary();

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    // Don't render cart if empty
    if (totalItems === 0) {
        return null;
    }

    return (
        <>
            {/* Floating Cart Button */}
            <div className="floating-cart-btn" onClick={toggleCart}>
                <div className="cart-icon">🛒</div>
                <div className="cart-count">{totalItems}</div>
                <div className="cart-total">₹{totalAmount}</div>
            </div>

            {/* Cart Overlay */}
            {isOpen && (
                <div className="cart-overlay" onClick={toggleCart}>
                    <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                        <div className="cart-header">
                            <h3>Your Cart ({totalItems} items)</h3>
                            <button className="close-cart" onClick={toggleCart}>×</button>
                        </div>

                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item-summary">
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <p className="restaurant">{item.restaurant}</p>
                                        <div className="item-price">
                                            <span className="quantity">{item.quantity}x</span>
                                            <span className="price">₹{item.price * item.quantity}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total-section">
                                <div className="total-row">
                                    <span>Subtotal:</span>
                                    <span>₹{subtotal}</span>
                                </div>
                                <div className="total-row">
                                    <span>Delivery:</span>
                                    <span>₹{deliveryFee}</span>
                                </div>
                                <div className="total-row final-total">
                                    <span>Total:</span>
                                    <span>₹{total}</span>
                                </div>
                            </div>

                            <button className="proceed-to-checkout" onClick={() => window.location.href = '/order'}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartSummary;
