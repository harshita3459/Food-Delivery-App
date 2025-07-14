import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Margherita Pizza",
            restaurant: "Pizza Palace",
            price: 299,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
            customizations: ["Extra cheese", "Thin crust"]
        },
        {
            id: 2,
            name: "Chicken Burger",
            restaurant: "Burger Junction",
            price: 179,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
            customizations: ["No pickles", "Extra sauce"]
        },
        {
            id: 3,
            name: "Butter Chicken",
            restaurant: "Spice Garden",
            price: 249,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
            customizations: ["Medium spicy", "Extra naan"]
        },
        {
            id: 4,
            name: "Masala Dosa",
            restaurant: "South Indian Express",
            price: 149,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop",
            customizations: ["Extra sambar", "Coconut chutney"]
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity === 0) {
            setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalItems = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    };

    const getTotalAmount = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    const getCartSummary = () => {
        const subtotal = getTotalAmount();
        const deliveryFee = 49;
        const tax = Math.round(subtotal * 0.05); // 5% GST
        const total = subtotal + deliveryFee + tax;

        return {
            subtotal,
            deliveryFee,
            tax,
            total,
            itemCount: getTotalItems()
        };
    };

    const value = {
        cartItems,
        updateQuantity,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalAmount,
        getCartSummary
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
