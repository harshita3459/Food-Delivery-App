import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Order.css";

const Order = () => {
    const [orderStep, setOrderStep] = useState(1);
    const { cartItems, updateQuantity, getCartSummary } = useCart();

    const [deliveryInfo, setDeliveryInfo] = useState({
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        instructions: ""
    });

    const [paymentInfo, setPaymentInfo] = useState({
        method: "card",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: ""
    });

    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);

    const { subtotal, deliveryFee, tax, total } = getCartSummary();
    const finalTotal = total - discount;

    const applyPromoCode = () => {
        if (promoCode.toLowerCase() === "bitemaster10") {
            setDiscount(subtotal * 0.1);
        } else if (promoCode.toLowerCase() === "welcome20") {
            setDiscount(subtotal * 0.2);
        } else {
            alert("Invalid promo code");
        }
    };

    const handleDeliveryInfoChange = (field, value) => {
        setDeliveryInfo(prev => ({ ...prev, [field]: value }));
    };

    const handlePaymentInfoChange = (field, value) => {
        setPaymentInfo(prev => ({ ...prev, [field]: value }));
    };

    const proceedToNextStep = () => {
        if (orderStep < 3) {
            setOrderStep(orderStep + 1);
        }
    };

    const goBackStep = () => {
        if (orderStep > 1) {
            setOrderStep(orderStep - 1);
        }
    };

    const placeOrder = () => {
        // Here you would typically send the order to your backend
        alert("Order placed successfully! You will receive a confirmation email shortly.");
        setOrderStep(4); // Success step
    };

    const renderStepIndicator = () => (
        <div className="step-indicator">
            <div className={`step ${orderStep >= 1 ? 'active' : ''}`}>
                <div className="step-number">1</div>
                <span>Review Cart</span>
            </div>
            <div className={`step ${orderStep >= 2 ? 'active' : ''}`}>
                <div className="step-number">2</div>
                <span>Delivery Info</span>
            </div>
            <div className={`step ${orderStep >= 3 ? 'active' : ''}`}>
                <div className="step-number">3</div>
                <span>Payment</span>
            </div>
            <div className={`step ${orderStep >= 4 ? 'active' : ''}`}>
                <div className="step-number">4</div>
                <span>Confirmation</span>
            </div>
        </div>
    );

    const renderCartReview = () => (
        <div className="cart-review">
            <h2>Review Your Order</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h4>{item.name}</h4>
                            <p className="restaurant-name">{item.restaurant}</p>
                            {item.customizations.length > 0 && (
                                <div className="customizations">
                                    {item.customizations.map((custom, index) => (
                                        <span key={index} className="customization">{custom}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <div className="item-price">₹{(item.price * item.quantity)}</div>
                    </div>
                ))}
            </div>

            <div className="promo-section">
                <div className="promo-input">
                    <input
                        type="text"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button onClick={applyPromoCode}>Apply</button>
                </div>
            </div>

            <div className="order-summary">
                <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>₹{subtotal}</span>
                </div>
                <div className="summary-row">
                    <span>Delivery Fee:</span>
                    <span>₹{deliveryFee}</span>
                </div>
                <div className="summary-row">
                    <span>GST (5%):</span>
                    <span>₹{Math.round(tax)}</span>
                </div>
                {discount > 0 && (
                    <div className="summary-row discount">
                        <span>Discount:</span>
                        <span>-₹{Math.round(discount)}</span>
                    </div>
                )}
                <div className="summary-row total">
                    <span>Total:</span>
                    <span>₹{Math.round(finalTotal)}</span>
                </div>
            </div>
        </div>
    );

    const renderDeliveryInfo = () => (
        <div className="delivery-info">
            <h2>Delivery Information</h2>
            <form className="delivery-form">
                <div className="form-group">
                    <label>Street Address *</label>
                    <input
                        type="text"
                        value={deliveryInfo.address}
                        onChange={(e) => handleDeliveryInfoChange('address', e.target.value)}
                        placeholder="Enter your street address"
                        required
                    />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>City *</label>
                        <input
                            type="text"
                            value={deliveryInfo.city}
                            onChange={(e) => handleDeliveryInfoChange('city', e.target.value)}
                            placeholder="City"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>PIN Code *</label>
                        <input
                            type="text"
                            value={deliveryInfo.zipCode}
                            onChange={(e) => handleDeliveryInfoChange('zipCode', e.target.value)}
                            placeholder="PIN Code"
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                        type="tel"
                        value={deliveryInfo.phone}
                        onChange={(e) => handleDeliveryInfoChange('phone', e.target.value)}
                        placeholder="+91 9876543210"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Delivery Instructions (Optional)</label>
                    <textarea
                        value={deliveryInfo.instructions}
                        onChange={(e) => handleDeliveryInfoChange('instructions', e.target.value)}
                        placeholder="Any special instructions for delivery..."
                        rows="3"
                    />
                </div>
            </form>
        </div>
    );

    const renderPaymentInfo = () => (
        <div className="payment-info">
            <h2>Payment Information</h2>
            <div className="payment-methods">
                <label className="payment-method">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentInfo.method === "card"}
                        onChange={(e) => handlePaymentInfoChange('method', e.target.value)}
                    />
                    <span>💳 Credit/Debit Card</span>
                </label>
                <label className="payment-method">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={paymentInfo.method === "upi"}
                        onChange={(e) => handlePaymentInfoChange('method', e.target.value)}
                    />
                    <span>📱 UPI</span>
                </label>
                <label className="payment-method">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="netbanking"
                        checked={paymentInfo.method === "netbanking"}
                        onChange={(e) => handlePaymentInfoChange('method', e.target.value)}
                    />
                    <span>🏦 Net Banking</span>
                </label>
                <label className="payment-method">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentInfo.method === "cash"}
                        onChange={(e) => handlePaymentInfoChange('method', e.target.value)}
                    />
                    <span>💵 Cash on Delivery</span>
                </label>
            </div>

            {paymentInfo.method === "card" && (
                <form className="payment-form">
                    <div className="form-group">
                        <label>Cardholder Name *</label>
                        <input
                            type="text"
                            value={paymentInfo.cardholderName}
                            onChange={(e) => handlePaymentInfoChange('cardholderName', e.target.value)}
                            placeholder="Name on card"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Card Number *</label>
                        <input
                            type="text"
                            value={paymentInfo.cardNumber}
                            onChange={(e) => handlePaymentInfoChange('cardNumber', e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Expiry Date *</label>
                            <input
                                type="text"
                                value={paymentInfo.expiryDate}
                                onChange={(e) => handlePaymentInfoChange('expiryDate', e.target.value)}
                                placeholder="MM/YY"
                                maxLength="5"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>CVV *</label>
                            <input
                                type="text"
                                value={paymentInfo.cvv}
                                onChange={(e) => handlePaymentInfoChange('cvv', e.target.value)}
                                placeholder="123"
                                maxLength="4"
                                required
                            />
                        </div>
                    </div>
                </form>
            )}

            {paymentInfo.method === "upi" && (
                <div className="payment-form">
                    <div className="upi-options">
                        <h4>Choose UPI Payment Method</h4>
                        <div className="upi-methods">
                            <div className="upi-option">
                                <input
                                    type="radio"
                                    name="upiMethod"
                                    value="phonepe"
                                    id="phonepe"
                                    defaultChecked
                                />
                                <label htmlFor="phonepe" className="upi-label">
                                    <img src="https://logos-world.net/wp-content/uploads/2023/02/PhonePe-Symbol.png" alt="PhonePe" className="upi-logo" />
                                    PhonePe
                                </label>
                            </div>
                            <div className="upi-option">
                                <input
                                    type="radio"
                                    name="upiMethod"
                                    value="googlepay"
                                    id="googlepay"
                                />
                                <label htmlFor="googlepay" className="upi-label">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Google_Pay_%28GPay%29_Logo.svg" alt="Google Pay" className="upi-logo" />
                                    Google Pay
                                </label>
                            </div>
                            <div className="upi-option">
                                <input
                                    type="radio"
                                    name="upiMethod"
                                    value="paytm"
                                    id="paytm"
                                />
                                <label htmlFor="paytm" className="upi-label">
                                    <img src="https://logos-world.net/wp-content/uploads/2020/11/Paytm-Logo.png" alt="Paytm" className="upi-logo" />
                                    Paytm
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>UPI ID (Optional)</label>
                            <input
                                type="text"
                                placeholder="yourname@upi"
                                className="upi-input"
                            />
                            <small>Or scan QR code when payment page opens</small>
                        </div>
                    </div>
                </div>
            )}

            {paymentInfo.method === "netbanking" && (
                <div className="payment-form">
                    <div className="netbanking-options">
                        <h4>Select Your Bank</h4>
                        <div className="bank-grid">
                            <div className="bank-option">
                                <input type="radio" name="bank" value="sbi" id="sbi" defaultChecked />
                                <label htmlFor="sbi" className="bank-label">
                                    <img src="https://companieslogo.com/img/orig/SBIN.NS-8e9fe0ed.png" alt="SBI" className="bank-logo" />
                                    State Bank of India
                                </label>
                            </div>
                            <div className="bank-option">
                                <input type="radio" name="bank" value="hdfc" id="hdfc" />
                                <label htmlFor="hdfc" className="bank-label">
                                    <img src="https://logos-world.net/wp-content/uploads/2020/12/HDFC-Bank-Logo.png" alt="HDFC" className="bank-logo" />
                                    HDFC Bank
                                </label>
                            </div>
                            <div className="bank-option">
                                <input type="radio" name="bank" value="icici" id="icici" />
                                <label htmlFor="icici" className="bank-label">
                                    <img src="https://logos-world.net/wp-content/uploads/2021/02/ICICI-Bank-Logo.png" alt="ICICI" className="bank-logo" />
                                    ICICI Bank
                                </label>
                            </div>
                            <div className="bank-option">
                                <input type="radio" name="bank" value="axis" id="axis" />
                                <label htmlFor="axis" className="bank-label">
                                    <img src="https://logos-world.net/wp-content/uploads/2021/02/Axis-Bank-Logo.png" alt="Axis Bank" className="bank-logo" />
                                    Axis Bank
                                </label>
                            </div>
                            <div className="bank-option">
                                <input type="radio" name="bank" value="kotak" id="kotak" />
                                <label htmlFor="kotak" className="bank-label">
                                    <img src="https://logos-world.net/wp-content/uploads/2021/02/Kotak-Mahindra-Bank-Logo.png" alt="Kotak" className="bank-logo" />
                                    Kotak Mahindra Bank
                                </label>
                            </div>
                            <div className="bank-option">
                                <input type="radio" name="bank" value="other" id="other" />
                                <label htmlFor="other" className="bank-label">
                                    <div className="other-bank-icon">🏦</div>
                                    Other Banks
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const getPaymentMethodDisplay = () => {
        switch (paymentInfo.method) {
            case 'card':
                return 'Credit/Debit Card';
            case 'upi':
                return 'UPI Payment';
            case 'netbanking':
                return 'Net Banking';
            case 'cash':
                return 'Cash on Delivery';
            default:
                return 'Unknown';
        }
    };

    const renderConfirmation = () => (
        <div className="confirmation">
            <div className="success-icon">✅</div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your order. Your food is being prepared and will be delivered soon.</p>
            <div className="order-details">
                <h3>Order Summary</h3>
                <p><strong>Order ID:</strong> #BM{Math.floor(Math.random() * 10000)}</p>
                <p><strong>Estimated Delivery:</strong> 30-45 minutes</p>
                <p><strong>Total:</strong> ₹{Math.round(finalTotal)}</p>
                <p><strong>Payment Method:</strong> {getPaymentMethodDisplay()}</p>
                <p><strong>Delivery Address:</strong> {deliveryInfo.address}, {deliveryInfo.city} {deliveryInfo.zipCode}</p>
            </div>
            <button className="track-order-btn">Track Your Order</button>
        </div>
    );

    return (
        <div className="order-wrapper">
            <div className="order-container">
                <h1 className="order-title">Complete Your Order</h1>

                {renderStepIndicator()}

                <div className="order-content">
                    {orderStep === 1 && renderCartReview()}
                    {orderStep === 2 && renderDeliveryInfo()}
                    {orderStep === 3 && renderPaymentInfo()}
                    {orderStep === 4 && renderConfirmation()}
                </div>

                {orderStep < 4 && (
                    <div className="order-actions">
                        {orderStep > 1 && (
                            <button className="btn-secondary" onClick={goBackStep}>
                                Back
                            </button>
                        )}
                        {orderStep < 3 && (
                            <button className="btn-primary" onClick={proceedToNextStep}>
                                Continue
                            </button>
                        )}
                        {orderStep === 3 && (
                            <button className="btn-primary" onClick={placeOrder}>
                                Place Order
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Order;
