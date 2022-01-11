import './App.css';
import { Route, Switch, BrowswerRouter } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/userRoute';
import Auth from './views/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowswerRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>You are signed in</h1>
                <button onClick={logoutUser}>Logout</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowswerRouter>
    </div>
  );
}

export default App;
