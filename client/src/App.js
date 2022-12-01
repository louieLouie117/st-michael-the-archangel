import './App.css';
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import {Router} from '@reach/router'

// import Subscribe from './components/Subscribe';


function App() {
  return (
    <div className="App">
    <Router>
      <LandingPage path="/"></LandingPage>
      <Dashboard path="/dashboard"></Dashboard>
    </Router>

        {/* <Subscribe></Subscribe> */}


  
    </div>
  );
}

export default App;
