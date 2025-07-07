import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} BiteMaster. All rights reserved.</p>
                <p>Made with ❤️ for food lovers.</p>
            </div>
        </footer>
    );
};

export default Footer;
