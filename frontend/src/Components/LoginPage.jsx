import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './LoginPage.css';
import { useLoginMutation } from '../slices/usersApi';
import { setCredentials } from '../slices/authSlice';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async (values, { setStatus }) => {
            try {
                const response = await login(values).unwrap();
                localStorage.setItem('token', response.token);
                dispatch(setCredentials({ token: response.token, user: response.username }));
                navigate('/');
            } catch (err) {
                if (err.status === 401) {
                    setStatus('Неверные имя пользователя или пароль');
                }
                console.log('error ', err)
            }
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>

            {formik.status && <div style={{ color: 'red' }}>{formik.status}</div>}
            <button
                type="submit"
                className="button login"
                disabled={isLoading}
            >
                {isLoading ? 'Load...' : 'Submit'}
            </button>
        </form>
    );
};

export default LoginPage;
