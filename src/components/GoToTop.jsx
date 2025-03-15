import React from 'react';

const GoToTop = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div
            onClick={handleClick}
            style={{
                position: "fixed",  // Fix the position on screen
                bottom: "20px",     // 20px from the bottom
                right: "20px",      // 20px from the right side
                background: "purple",
                height: "60px",     // Adjusted size
                width: "60px",      // Adjusted size
                borderRadius: "50%", // Makes it circular
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white", 
                fontWeight: "bold",
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.3)", // Adds shadow
                transition: "background 0.3s ease",
            }}
        >
            ▲
        </div>
    );
};

export default GoToTop;
