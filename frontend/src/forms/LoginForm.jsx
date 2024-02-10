import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useUser, loginUser } from '../services/AuthService';

function LoginForm() {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);
    const { login } = useUser();

    const handleLogin = async (values, { setSubmitting }) => {
        try {
            const response = await loginUser(values.email, values.password);
            login(response, response.token);
            if (response.role === "USER") navigate('/books')
            else if (response.role === "ADMIN") navigate('/kids')
            else navigate('/');
        } catch (error) {
            console.error('Error while logging in:', error);
            setLoginError('Invalid email or password');
            setSubmitting(false);
        }
    }

    return (
        <div className="container">
            {loginError && <div className="alert alert-danger">{loginError}</div>}
            <Formik
                initialValues={{ email: 'wiki@pl.pl', password: 'Password123@' }}
                onSubmit={handleLogin}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <Field type="email" name="email" placeholder="Email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <Field type="password" name="password" placeholder="Password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Logging in...' : 'Log in'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;