import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartSummary from '../common/CartSummary';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Restaurant data with complete menus
    const restaurants = {
        1: {
            id: 1,
            name: "Pizza Palace",
            cuisine: "Italian",
            rating: 4.5,
            deliveryTime: "25-35 min",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop",
            description: "Authentic Italian pizzas with fresh ingredients and traditional recipes",
            address: "123 Italian Street, Food District",
            phone: "+91 9876543210",
            menu: {
                "Pizzas": [
                    {
                        id: 101,
                        name: "Margherita Pizza",
                        description: "Classic pizza with fresh tomatoes, mozzarella, and basil",
                        price: 299,
                        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
                        veg: true,
                        popular: true
                    },
                    {
                        id: 102,
                        name: "Pepperoni Pizza",
                        description: "Spicy pepperoni with mozzarella cheese and tomato sauce",
                        price: 399,
                        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop",
                        veg: false,
                        popular: true
                    },
                    {
                        id: 103,
                        name: "Vegetarian Supreme",
                        description: "Bell peppers, onions, mushrooms, olives, and cheese",
                        price: 349,
                        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
                        veg: true,
                        popular: false
                    }
                ],
                "Pasta": [
                    {
                        id: 104,
                        name: "Spaghetti Carbonara",
                        description: "Creamy pasta with eggs, cheese, pancetta, and black pepper",
                        price: 279,
                        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
                        veg: false,
                        popular: true
                    },
                    {
                        id: 105,
                        name: "Penne Arrabbiata",
                        description: "Spicy tomato sauce with garlic, red chilies, and herbs",
                        price: 249,
                        image: "https://images.unsplash.com/photo-1563379091339-03246963d29c?w=300&h=200&fit=crop",
                        veg: true,
                        popular: false
                    }
                ],
                "Beverages": [
                    {
                        id: 106,
                        name: "Italian Soda",
                        description: "Refreshing fizzy drink with Italian flavors",
                        price: 89,
                        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop",
                        veg: true,
                        popular: false
                    }
                ]
            }
        },
        2: {
            id: 2,
            name: "Burger Junction",
            cuisine: "American",
            rating: 4.3,
            deliveryTime: "20-30 min",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop",
            description: "Juicy burgers and crispy fries made with premium ingredients",
            address: "456 Burger Lane, Fast Food Plaza",
            phone: "+91 9876543211",
            menu: {
                "Burgers": [
                    {
                        id: 201,
                        name: "Classic Chicken Burger",
                        description: "Grilled chicken patty with lettuce, tomato, and mayo",
                        price: 179,
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
                        veg: false,
                        popular: true
                    },
                    {
                        id: 202,
                        name: "Veggie Deluxe Burger",
                        description: "Plant-based patty with fresh vegetables and special sauce",
                        price: 159,
                        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300&h=200&fit=crop",
                        veg: true,
                        popular: true
                    },
                    {
                        id: 203,
                        name: "Cheese Burst Burger",
                        description: "Double cheese with beef patty and crispy onions",
                        price: 229,
                        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop",
                        veg: false,
                        popular: false
                    }
                ],
                "Sides": [
                    {
                        id: 204,
                        name: "French Fries",
                        description: "Crispy golden fries with salt and herbs",
                        price: 99,
                        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=300&h=200&fit=crop",
                        veg: true,
                        popular: true
                    },
                    {
                        id: 205,
                        name: "Onion Rings",
                        description: "Crispy battered onion rings with dipping sauce",
                        price: 119,
                        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop",
                        veg: true,
                        popular: false
                    }
                ],
                "Beverages": [
                    {
                        id: 206,
                        name: "Cola",
                        description: "Classic cola drink with ice",
                        price: 59,
                        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop",
                        veg: true,
                        popular: true
                    }
                ]
            }
        },
        4: {
            id: 4,
            name: "Spice Garden",
            cuisine: "Indian",
            rating: 4.4,
            deliveryTime: "35-45 min",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=400&fit=crop",
            description: "Aromatic spices and traditional Indian dishes from various regions",
            address: "789 Spice Market, Heritage Town",
            phone: "+91 9876543212",
            menu: {
                "Main Course": [
                    {
                        id: 401,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: 249,
                        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
                        veg: false,
                        popular: true
                    },
                    {
                        id: 402,
                        name: "Paneer Butter Masala",
                        description: "Cottage cheese in creamy tomato-based curry",
                        price: 199,
                        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop",
                        veg: true,
                        popular: true
                    },
                    {
                        id: 403,
                        name: "Biryani (Chicken)",
                        description: "Fragrant basmati rice with spiced chicken and herbs",
                        price: 299,
                        image: "https://images.unsplash.com/photo-1563379091339-03246963d29c?w=300&h=200&fit=crop",
                        veg: false,
                        popular: true
                    }
                ],
                "Bread & Rice": [
                    {
                        id: 404,
                        name: "Garlic Naan",
                        description: "Soft bread with garlic and butter",
                        price: 79,
                        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop",
                        veg: true,
                        popular: true
                    },
                    {
                        id: 405,
                        name: "Jeera Rice",
                        description: "Basmati rice with cumin and whole spices",
                        price: 149,
                        image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=200&fit=crop",
                        veg: true,
                        popular: false
                    }
                ],
                "Beverages": [
                    {
                        id: 406,
                        name: "Mango Lassi",
                        description: "Sweet yogurt drink with fresh mango",
                        price: 89,
                        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop",
                        veg: true,
                        popular: true
                    }
                ]
            }
        }
    };

    const restaurant = restaurants[id];

    if (!restaurant) {
        return (
            <div className="restaurant-not-found">
                <h2>Restaurant not found</h2>
                <button onClick={() => navigate('/restaurants')}>Back to Restaurants</button>
            </div>
        );
    }

    const categories = ['All', ...Object.keys(restaurant.menu)];
    const filteredMenu = selectedCategory === 'All'
        ? Object.entries(restaurant.menu).reduce((acc, [category, items]) => {
            acc[category] = items;
            return acc;
        }, {})
        : { [selectedCategory]: restaurant.menu[selectedCategory] };

    const handleAddToCart = (item) => {
        const cartItem = {
            id: Date.now() + Math.random(), // Unique ID
            name: item.name,
            restaurant: restaurant.name,
            price: item.price,
            image: item.image,
            customizations: []
        };
        addToCart(cartItem);
        alert(`${item.name} added to cart!`);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star full">★</span>);
        }

        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }

        return stars;
    };

    return (
        <div className="restaurant-menu-wrapper">
            {/* Restaurant Header */}
            <div className="restaurant-header">
                <div className="restaurant-header-image">
                    <img src={restaurant.image} alt={restaurant.name} />
                    <div className="restaurant-header-overlay">
                        <div className="restaurant-header-content">
                            <button className="back-button" onClick={() => navigate('/restaurants')}>
                                ← Back to Restaurants
                            </button>
                            <h1>{restaurant.name}</h1>
                            <p className="restaurant-description">{restaurant.description}</p>
                            <div className="restaurant-meta">
                                <div className="rating">
                                    {renderStars(restaurant.rating)}
                                    <span>{restaurant.rating}</span>
                                </div>
                                <div className="delivery-time">
                                    <span className="delivery-icon">🚚</span>
                                    <span>{restaurant.deliveryTime}</span>
                                </div>
                                <div className="cuisine">
                                    <span>{restaurant.cuisine} Cuisine</span>
                                </div>
                            </div>
                            <div className="restaurant-contact">
                                <p>📍 {restaurant.address}</p>
                                <p>📞 {restaurant.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Categories */}
            <div className="menu-categories">
                <div className="container">
                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="menu-container">
                <div className="container">
                    {Object.entries(filteredMenu).map(([category, items]) => (
                        <div key={category} className="menu-section">
                            <h2 className="category-title">{category}</h2>
                            <div className="menu-items">
                                {items.map(item => (
                                    <div key={item.id} className="menu-item">
                                        <div className="menu-item-image">
                                            <img src={item.image} alt={item.name} />
                                            {item.popular && <div className="popular-badge">Popular</div>}
                                            <div className={`veg-indicator ${item.veg ? 'veg' : 'non-veg'}`}>
                                                <div className="veg-dot"></div>
                                            </div>
                                        </div>
                                        <div className="menu-item-content">
                                            <div className="menu-item-header">
                                                <h3>{item.name}</h3>
                                                <span className="price">₹{item.price}</span>
                                            </div>
                                            <p className="description">{item.description}</p>
                                            <button
                                                className="add-to-cart-btn"
                                                onClick={() => handleAddToCart(item)}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CartSummary />
        </div>
    );
};

export default RestaurantMenu;
