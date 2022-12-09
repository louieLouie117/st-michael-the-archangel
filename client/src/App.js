import './App.css';
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import {Router} from '@reach/router'
import UnderDevelopment from './views/UnderDevelopment';
import ParishStaff from './views/ParishStaff';
import OurMinistries from './views/OurMinistries';
import GiftShop from './views/GiftShop';
import FaithFormation from './views/FaithFormation';

// import Subscribe from './components/Subscribe';


function App() {
  return (
    <div className="App">
    <Router>
      <LandingPage path="/"></LandingPage>
      <Dashboard path="/dashboard"></Dashboard>
      <UnderDevelopment path="/under-development"></UnderDevelopment>
      <ParishStaff path="parish-staff"></ParishStaff>
      <OurMinistries path="our-ministries"></OurMinistries>
      <GiftShop path="gift-shop"></GiftShop>
      <FaithFormation path="faith-formation"></FaithFormation>
    </Router>

        {/* <Subscribe></Subscribe> */}


  
    </div>
  );
}

export default App;
