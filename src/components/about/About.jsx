import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-container">
                <h1 className="about-title">About BiteMaster</h1>

                <div className="about-content">
                    <p>
                        <strong>BiteMaster</strong> is your ultimate food delivery companion, designed to bring
                        delicious meals from your favorite restaurants right to your doorstep. Whether you're
                        craving a quick bite or planning a feast, BiteMaster makes the process fast, easy, and
                        enjoyable.
                    </p>

                    <p>
                        With a user-friendly interface and seamless experience, you can browse an extensive list
                        of top-rated restaurants, explore their full menus, and place orders in just a few clicks.
                        BiteMaster ensures accurate and real-time order tracking from the kitchen to your location.
                    </p>

                    <h2 className="features-heading">Key Features</h2>
                    <ul className="features-list">
                        <li><strong>Restaurant Listing:</strong> Browse a curated selection of local and premium restaurants.</li>
                        <li><strong>Menu Display:</strong> Explore full restaurant menus with item descriptions, pricing, and images.</li>
                        <li><strong>Order Placement:</strong> Add meals to your cart, customize them, and place orders with ease.</li>
                        <li><strong>Delivery Tracking:</strong> Track your order in real-time from preparation to delivery.</li>
                    </ul>

                    <p>
                        BiteMaster is more than just a food delivery app – it's a smart way to satisfy your hunger
                        without the hassle. We’re committed to delivering not just food, but a top-tier experience
                        tailored to your taste.
                    </p>

                    <p className="closing-note">
                        Join thousands of happy food lovers and let BiteMaster serve your cravings!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
