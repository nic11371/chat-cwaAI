import React from 'react';
import { useFormik } from 'formik';
import { useAuth0 } from "@auth0/auth0-react";
import './LoginPage.css';

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
            <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
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

            <button
                type="submit"
                onClick={() => loginWithRedirect()} 
                className="button login"
            >
            Submit
            </button>
        </form>
    );
};

export default LoginPage;
