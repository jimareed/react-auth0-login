import React from 'react';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sample react app to login to auth0.
        </p>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
      </header>
    </div>
  );
}

export default App;
