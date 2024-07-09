
import {BrowserRouter as Router,Switch,Route, Redirect } from "react-router-dom"
import Signup from '../src/pages/Signup'
import Login from '../src/pages/Login'
import Notesapp from '../src/pages/Notesapp'
import Home from '../src/pages/Home'
import { useState } from "react"
import Checkauth from "./pages/Checkauth"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <div className="main">
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route  path="/signup">
        <Signup/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/check-auth">
            <Checkauth setIsAuthenticated={setIsAuthenticated} />
          </Route>
        <Route path="/allnotes">
        <Checkauth setIsAuthenticated={setIsAuthenticated}/>
        {isAuthenticated ? <Notesapp  setIsAuthenticated={setIsAuthenticated} /> : <Redirect to="/login" />
        }
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
