import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/userRoute';
import Auth from './views/Auth';
import ToDoAdmin from './views/ToDoAdmin';
import ToDoList from './views/ToDoList';
import Header from './components/Header';

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
                <Header logoutUser={logoutUser} currentUser={currentUser} />
                <div className="todo-page">
                  <ToDoAdmin />
                  <ToDoList />
                </div>
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
