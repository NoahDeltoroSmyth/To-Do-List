import React, { useState } from 'react';
import { signInUser, signUpUser } from '../services/userRoute';
import AuthForm from '../components/AuthForm';
import classNames from 'classnames';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setError('No user found with that email/password');
    }
  };
  return (
    <>
      <div className="link">
        <h1
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In
        </h1>
        <h1
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up
        </h1>
      </div>
      <div>
        <AuthForm
          error={error}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
