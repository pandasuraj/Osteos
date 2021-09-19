import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Consulting from './pages/Consulting';
import Contact from './pages/Contact';
import DoctorsPanel from './pages/DoctorsPanel';
import Products_Services from './pages/Products_Services';
import './App.css';
import Navbar from './components/Navbar';
import ArthaPlatform from './pages/ArthaPlatform';
import ArthaDigital from './pages/ArthaDigital';
import IEMR from './pages/IEMR';
import HomeCare from './pages/HomeCare';
import Download from './pages/Download';
import ConsultingLogin from './pages/ConsultingLogin';

const App = () => {
     return (
          <>
               <Navbar />

               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route
                         exact
                         path="/doctorspanel"
                         component={DoctorsPanel}
                    />
                    <Route
                         exact
                         path="/products_services"
                         component={Products_Services}
                    />
                    <Route exact path="/consulting" component={Consulting} />
                    <Route
                         exact
                         path="/artha-product"
                         component={ArthaPlatform}
                    />
                    <Route
                         exact
                         path="/artha-digital"
                         component={ArthaDigital}
                    />
                    <Route exact path="/iemr" component={IEMR} />
                    <Route exact path="/home-care" component={HomeCare} />
                    <Route exact path="/download" component={Download} />
                   <Route exact path="/login" component={ConsultingLogin}/>
                    <Redirect to="/" />
               </Switch>
          </>
     );
};

export default App;
