import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 &&
            navigate("/login", {
                state: location.pathname,
            });
        return () => clearInterval(interval);
    }, [count, navigate, location]);
    return (
        <>
            {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
            <div class='flex space-x-2 justify-center items-center h-screen'>
                <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
                <h1 className="text-black font-">Redirecting you to in {count} seconds.</h1>
            </div>
        </>
    );
};

export default Spinner;