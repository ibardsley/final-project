import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Read from './components/Read'
import Update from './components/Update'
import NavBar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className='full-page'>
      <NavBar />
      <div className="main">
        <h2 className='main-header'>Todo App</h2>
        <br></br>
        <div>
          <Route exact path='/' component={Home} />
        </div>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div>
          <Route exact path='/read' component={Read} />
        </div>
        <div>
        <Route path='/update' component={Update} />
        </div>      
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
