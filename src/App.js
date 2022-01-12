import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/userRoute';
import Auth from './views/Auth';
// import ToDoForm from './components/ToDoForm';
import ToDoAdmin from './views/ToDoAdmin';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <ToDoAdmin setCurrentUser={setCurrentUser} />
                <button onClick={logoutUser}>Logout</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
