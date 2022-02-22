import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
function App() {
  return (
    <div className="app">
         <Router>
           <Header/>
           <Switch>
             <Route exact path='/'>
               <Login />
             </Route>
             <Route path="/home">
               <Home />
             </Route>
           </Switch>
           <Route path='/detail/:id'>
             <Detail />
           </Route>
         </Router> 
    </div>
  );
}

export default App;
