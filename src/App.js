import React,{Component} from 'react';
import './App.css';
import New from './New'
import Dashboard from './Components/Dashboard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './UpAndDown/Header'
import Footer from './UpAndDown/Footer'
import UserSignIn from './UserSignIn'
import AddProfile from './Components/AddProfile'
import NgoSignIn from './NGO/NgoSignIn'




class App extends Component{


    
  



    render(){
        return (
            <div className="App">
        
        
            <Router>
              <div>
           
                <Switch>
                <Route exact path="/">
                <Dashboard/>
                  </Route>
                  <Route exact path="/SignUp">
                    <New />
                  </Route>
                  <Route exact path="/UserSignIn">
                    <UserSignIn/>
                  </Route>
                  <Route exact path="/AddProfile">
                    <AddProfile/>
                  </Route>
                  <Route exact path="/NgoSignIn">
                    <NgoSignIn/>
                  </Route>
                </Switch>
              </div>
             
            </Router>
        
        
                           
                                {/* <New/> */}
            </div>
          );
    }
  
}

export default App;
