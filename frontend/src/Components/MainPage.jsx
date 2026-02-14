import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            console.log('Успешная авторизация. Токен:', token);
        }
    }, [navigate]);

    return (
        <div>
            <h3>Chat CWAAI</h3>
            <div>
                <p>Welcome to the chat</p>
            </div>
        </div>
    );
};

export default MainPage
