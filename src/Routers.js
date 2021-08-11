import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import LoginForm from './Components/Login/LoginForm';
import Home from './Components/Home/Home';
import Calendars from './Components/Calendars/Calendars';
import Contact from './Components/Contact/Contact';
import TimeCards from './Components/TimeCards/TimeCards';
import CreateTimeCards from './Components/CreateTimeCards/CreateTimeCards';
import Weather from './Components/Weather/Weather';
import Clock from './Components/Clock/Clock';
import Calculator from './Components/Calculator/Calculator';

import FirebaseLogin from './Components/Firebase/FirebaseLogin';
import FirebaseAuth from './Components/Firebase/FirebaseAuth';

const Routers = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" component={FirebaseLogin} />
      <Route path="/FirebaseAuth" component={FirebaseAuth} />
      <Route path="/adminLogin" component={LoginPage} />
      <Route path="/adminLoginForm" component={LoginForm} />
      <Route path="/Home" component={Home} />
      <Route path="/Contact" component={Contact} />
      <Route path="/CreateTimeCards" component={CreateTimeCards} />
      <Route path="/TimeCards" component={TimeCards} />
      <Route path="/Calendars" component={Calendars} />
      <Route path="/Weather" component={Weather} />
      <Route path="/Clock" component={Clock} />
      <Route path="/Calculator" component={Calculator} />
    </>
  </BrowserRouter>
)

export default Routers;