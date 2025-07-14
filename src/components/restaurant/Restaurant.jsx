import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Restaurant.css";

const Restaurant = () => {
    const navigate = useNavigate();
    const [restaurants] = useState([
        {
            id: 1,
            name: "Pizza Palace",
            cuisine: "Italian",
            rating: 4.5,
            deliveryTime: "25-35 min",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
            description: "Authentic Italian pizzas with fresh ingredients",
            priceRange: "$$",
            isOpen: true
        },
        {
            id: 2,
            name: "Burger Junction",
            cuisine: "American",
            rating: 4.3,
            deliveryTime: "20-30 min",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
            description: "Juicy burgers and crispy fries",
            priceRange: "$",
            isOpen: true
        },
        {
            id: 3,
            name: "Sushi Zen",
            cuisine: "Japanese",
            rating: 4.7,
            deliveryTime: "30-40 min",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
            description: "Fresh sushi and authentic Japanese cuisine",
            priceRange: "$$$",
            isOpen: true
        },
        {
            id: 4,
            name: "Spice Garden",
            cuisine: "Indian",
            rating: 4.4,
            deliveryTime: "35-45 min",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
            description: "Aromatic spices and traditional Indian dishes",
            priceRange: "$$",
            isOpen: false
        },
        {
            id: 5,
            name: "Taco Fiesta",
            cuisine: "Mexican",
            rating: 4.2,
            deliveryTime: "15-25 min",
            image: "https://tse3.mm.bing.net/th/id/OIP.nRbwesFF4QVxkzSuKHnaJgHaHa?pid=Api&P=0&h=180",
            description: "Authentic Mexican tacos and burritos",
            priceRange: "$",
            isOpen: true
        },
        {
            id: 6,
            name: "Dragon Wok",
            cuisine: "Chinese",
            rating: 4.6,
            deliveryTime: "25-35 min",
            image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop",
            description: "Traditional Chinese cuisine with modern twist",
            priceRange: "$$",
            isOpen: true
        }
    ]);

    const [selectedCuisine, setSelectedCuisine] = useState("All");
    const [sortBy, setSortBy] = useState("rating");



    const cuisines = ["All", "Italian", "American", "Japanese", "Indian", "Mexican", "Chinese"];

    const filteredRestaurants = restaurants
        .filter(restaurant => selectedCuisine === "All" || restaurant.cuisine === selectedCuisine)
        .sort((a, b) => {
            if (sortBy === "rating") return b.rating - a.rating;
            if (sortBy === "deliveryTime") return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
            return a.name.localeCompare(b.name);
        });

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
        <div className="restaurant-wrapper">
            <div className="restaurant-container">
                <h1 className="restaurant-title">Our Restaurant Partners</h1>

                <div className="filters-container">
                    <div className="filter-group">
                        <label htmlFor="cuisine-filter">Filter by Cuisine:</label>
                        <select
                            id="cuisine-filter"
                            value={selectedCuisine}
                            onChange={(e) => setSelectedCuisine(e.target.value)}
                            className="filter-select"
                        >
                            {cuisines.map(cuisine => (
                                <option key={cuisine} value={cuisine}>{cuisine}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="sort-filter">Sort by:</label>
                        <select
                            id="sort-filter"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="filter-select"
                        >
                            <option value="rating">Rating</option>
                            <option value="deliveryTime">Delivery Time</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>

                <div className="restaurants-grid">
                    {filteredRestaurants.map(restaurant => (
                        <div key={restaurant.id} className={`restaurant-card ${!restaurant.isOpen ? 'closed' : ''}`}>
                            <div className="restaurant-image-container">
                                <img
                                    src={restaurant.image}
                                    alt={restaurant.name}
                                    className="restaurant-image"
                                />
                                {!restaurant.isOpen && (
                                    <div className="closed-overlay">
                                        <span>Currently Closed</span>
                                    </div>
                                )}
                                <div className="cuisine-badge">{restaurant.cuisine}</div>
                            </div>

                            <div className="restaurant-info">
                                <div className="restaurant-header">
                                    <h3 className="restaurant-name">{restaurant.name}</h3>
                                    <span className="price-range">{restaurant.priceRange}</span>
                                </div>

                                <p className="restaurant-description">{restaurant.description}</p>

                                <div className="restaurant-details">
                                    <div className="rating-container">
                                        <div className="stars">{renderStars(restaurant.rating)}</div>
                                        <span className="rating-text">{restaurant.rating}</span>
                                    </div>

                                    <div className="delivery-time">
                                        <span className="delivery-icon">🚚</span>
                                        <span>{restaurant.deliveryTime}</span>
                                    </div>
                                </div>

                                <div className="restaurant-actions">
                                    <button
                                        className={`view-menu-button ${!restaurant.isOpen ? 'disabled' : ''}`}
                                        disabled={!restaurant.isOpen}
                                        onClick={() => restaurant.isOpen && navigate(`/restaurant/${restaurant.id}`)}
                                    >
                                        {restaurant.isOpen ? 'View Menu' : 'Closed'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
