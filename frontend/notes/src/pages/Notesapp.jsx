import '../style/App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom"
import Nav from "../components/Nav"
import Notes from "../components/Notes"
import Create from "../components/Create"
import Singlenote from '../components/Singlenote'
import Usefetch from '../components/Usefetch';
import Update from '../components/Update';
const Notesapp = ({setIsAuthenticated}) => {

    const{notes,problem}=Usefetch("http://localhost:4000/api/notes/allnotes")
  return (
    <Router>
      <div className="App">
      <Nav setIsAuthenticated={setIsAuthenticated}/>
      <div className="problem">
        {problem && <div>{problem}</div>}
      </div>
     <Switch>
        <Route path="/allnotes">
          {notes && <Notes notes= {notes}/>}
        </Route>
        <Route path="/Create">
         <Create/>
        </Route>
        <Route path="/Singlenote/:id">
          <Singlenote/>
        </Route>
        <Route path="/Update/:id">
          <Update/>
        </Route>
     </Switch>
    </div>
    </Router>
  )
}

export default Notesapp



