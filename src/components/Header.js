import React from 'react';

export default function Header({ logoutUser, currentUser }) {
  return (
    <>
      <div className="header">
        <h3>Hello {currentUser.user.email} </h3>
        <button className="logout-button" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </>
  );
}
