import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Read from './components/Read'
import Update from './components/Update'
import NavBar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
    <div className='full-page'>
      <NavBar />
      <div className="main">
        <h2 className='main-header'>To Do App</h2>
        <br></br>
        <br></br>
      
          <Route exact path='/' component={Home} />
        
          <Route exact path='/create' component={Create} />
        
          <Route exact path='/read' component={Read} />
        
          <Route path='/update' component={Update} />

          <Route path='/About' component={About} />

          <Route path='/Contact' component={Contact} />
             
      </div>
    </div>
    </Router>
  );
}

export default App;
