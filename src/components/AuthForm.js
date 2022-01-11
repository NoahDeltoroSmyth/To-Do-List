import React from 'react';

export default function AuthForm({ handleSubmit, error, email, setEmail, password, setPassword }) {
  return (
    <form onSubmit={handleSubmit}>
      <p>{error}</p>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" />
    </form>
  );
}
