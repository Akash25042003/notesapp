
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Signup from '../src/pages/Signup'
import Login from '../src/pages/Login'
import Notesapp from '../src/pages/Notesapp'
import Home from '../src/pages/Home'
import { useState } from "react"


function App() {
  const [isok,setisok]=useState(false)
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
        <Login setisok={setisok}/>
        </Route>
        <Route path="/allnotes">
        {isok && <Notesapp/>}
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
