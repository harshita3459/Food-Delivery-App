import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const restaurants = [
        {
            id: 1,
            name: "Spice Villa",
            cuisine: "Indian",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
            rating: 4.5,
        },
        {
            id: 2,
            name: "Pasta Palace",
            cuisine: "Italian",
            image: "https://tse4.mm.bing.net/th/id/OIP.nXWklIH_NBz7hG0rkThI1QHaE7?pid=Api&P=0&h=180",
            rating: 4.2,
        },
        {
            id: 3,
            name: "Sushi World",
            cuisine: "Japanese",
            image: "https://tse1.mm.bing.net/th/id/OIP.Ti3-djYt7jq48AcI4yjrMwHaEJ?pid=Api&P=0&h=180",
            rating: 4.7,
        },
    ];

    const cuisines = ["Indian", "Chinese", "Italian", "Mexican", "Thai", "American"];

    return (
        <div className="home-wrapper">
            <section className="hero">
                <h1>Bite into Happiness</h1>
                <p>Your favorite meals delivered to your doorstep in minutes.</p>
                <button className="hero-btn" onClick={() => navigate('/restaurants')}>Explore Restaurants</button>
            </section>

            <section className="features">
                <div className="feature-box">
                    <h3>🔥 Hot & Fresh</h3>
                    <p>Meals delivered fresh and steaming, every single time.</p>
                </div>
                <div className="feature-box">
                    <h3>⏱️ Quick Delivery</h3>
                    <p>Speedy service so you never wait too long for your food.</p>
                </div>
                <div className="feature-box">
                    <h3>📍 Live Tracking</h3>
                    <p>Know exactly where your order is, from kitchen to your door.</p>
                </div>
            </section>

            <section className="browse-cuisine">
                <h2>Browse by Cuisine</h2>
                <div className="cuisine-tags">
                    {cuisines.map((type, idx) => (
                        <span
                            key={idx}
                            className="tag"
                            onClick={() => navigate('/restaurants')}
                            style={{ cursor: 'pointer' }}
                        >
                            {type}
                        </span>
                    ))}
                </div>
            </section>

            <section className="restaurant-section">
                <h2>Popular Restaurants</h2>
                <div className="restaurant-grid">
                    {restaurants.map((rest) => (
                        <div
                            className="restaurant-card"
                            key={rest.id}
                            onClick={() => navigate('/restaurants')}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={rest.image} alt={rest.name} className="restaurant-img" />
                            <div className="restaurant-info">
                                <h3>{rest.name}</h3>
                                <p>{rest.cuisine}</p>
                                <span className="rating">⭐ {rest.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
