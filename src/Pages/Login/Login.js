import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
    return (
        <Container className="">
            <h4>Login With</h4>
            <button onClick={handleGoogleSignIn}>Signin with Google</button>
        </Container>
    );
};

export default Login;