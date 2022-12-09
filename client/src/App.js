import './App.css';
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import {Router} from '@reach/router'
import UnderDevelopment from './views/UnderDevelopment';
import ParishStaff from './views/ParishStaff';

// import Subscribe from './components/Subscribe';


function App() {
  return (
    <div className="App">
    <Router>
      <LandingPage path="/"></LandingPage>
      <Dashboard path="/dashboard"></Dashboard>
      <UnderDevelopment path="/under-development"></UnderDevelopment>
      <ParishStaff path="parish-staff"></ParishStaff>
    </Router>

        {/* <Subscribe></Subscribe> */}


  
    </div>
  );
}

export default App;
