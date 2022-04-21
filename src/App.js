import React,{useEffect,useContext} from 'react';
import './App.css';
import Home from './Pages/Home';
import  {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthContext,FirebaseContext} from './Store/FirebaseContext';
import Viewpost from './Pages/ViewPost'
import Create from './Pages/Create'





function App() {
  const{setUser}=useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)

  useEffect(()=>{

  })
  return (
    <div>
      <Router>
        <Route exact path='/'>

        <Home />
        </Route> 
        <Route path='/signup'>

        <Signup/>
        </Route> 
        <Route path='/login'>

       <Login/>
        </Route> 
        <Route path='/create'>
          <Create />
        </Route> 
     
      </Router>
    </div>
  );
}

export default App;
