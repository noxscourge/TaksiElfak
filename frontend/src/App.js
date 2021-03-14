
import './App.css';
import './bootstrap.css'
import Header from './Components/Header'
import HomeScreen from './Screens/HomeScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import VozacScreen from './Screens/VozacScreen';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />

function App() {
  return (
            <Router>
           
          
            
            <Route path='/' component={HomeScreen} exact />
            <Route path='/vozaci/:id' component ={VozacScreen} exact />

            </Router>
            
          )
  }

export default App;
