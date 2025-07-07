import React from "react";

const Home = () => {
    // Example restaurant data
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
            image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
            rating: 4.2,
        },
        {
            id: 3,
            name: "Sushi World",
            cuisine: "Japanese",
            image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
            rating: 4.7,
        },
    ];

    return (
        <div className="container mt-4">
            <div className="text-center mb-8 mt-8">
                <h1 className="font-bold text-3xl mb-2 text-orange-600">Welcome to BiteMaster!</h1>
                <p className="text-gray-600 text-lg mb-6">Delicious food delivered fast from your favorite local restaurants.</p>
            </div>
            <h2 className="mb-4 text-xl font-semibold">Popular Restaurants</h2>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {restaurants.map((rest) => (
                    <div className="card" key={rest.id}>
                        <img src={rest.image} alt={rest.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{rest.name}</h3>
                            <p className="text-gray-600 mb-2">{rest.cuisine}</p>
                            <span className="text-orange-600 font-semibold">⭐ {rest.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
