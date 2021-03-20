
import './App.css';
import './bootstrap.css'
import HomeScreen from './Screens/HomeScreen'
import EditVozaca from './Screens/EditVozaca'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Zakazi_Voznju from './Screens/Zakazi_Voznju';
import DodajVozaca from './Screens/DodajVozaca'
import DeleteVozaca from './Screens/DeleteVozaca';
import Zakazane_Voznje from './Screens/Zakazane_Voznje';
import DeleteVoznja from './Screens/DeleteVoznja';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />

function App() {
  return (
            <Router>
           
            <Route path='/deleteVoznja/:id' component={DeleteVoznja} exact/>
            <Route path='/zakazane_voznje' component={Zakazane_Voznje} />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/Zakazi_Voznju/:id' component={Zakazi_Voznju} exact/>
            <Route path='/DodajVozaca' component={DodajVozaca} exact/>
            <Route path='/EditVozaca/:id' component={EditVozaca} exact />
            <Route path='/DeleteVozaca/:id' component={DeleteVozaca} exact />
           </Router>
 
          )
  }

export default App;
