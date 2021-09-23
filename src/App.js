
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import Details from './Details';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*
  To set up the local database, run on a different terminal the following:

  npx json-server --watch data/db.json --port 8000

  This way you can start using the app
*/

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/db/:id'>
              <Details />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>            
          </Switch>
        </div>
      </div>
    </Router>
  )
};

export default App;


