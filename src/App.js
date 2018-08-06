import React, { Component } from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react'
import './App.css';
import {Link,Switch,Route} from 'react-router-dom';
import FoodItems from './FoodItems';
import about from './about';
import community from './community';
import location from './location';
import recepies from './recepies';
const divStyle = {
  backgroundColor: '#ffdaca'
};
class App extends Component {

  render() {
    return (
      <div className="ui-container">
        
        <div className="ui pointing menu">
       
         <Link className="active orange item" to="/about">ABOUT</Link>
         <Link className="item" to="/community">COMMUNITY</Link>
         <Link className="item" to="/location">LOCATION</Link>
         <Link className="item" to="/menu">OUR MENU</Link>
         <Link className="item" to="/recepies">RECEPIES</Link>
         <div className="right menu">
         <a className="ui item">
      CONTACT
    </a>
    <a className="ui item">
      LOGOUT
    </a>
  </div>
        </div>
        <div className="ui segment" style={divStyle} >
     
  
        <Switch>
        
       
        <Route path="/about" component={about} />
        <Route path="/community" component={community}/>
        <Route path="/location" component={location}/>
        <Route path="/menu" component={recepies} />
        <Route path="/recepies" component={FoodItems}/>
      </Switch>
      </div>
      </div>
    );
  }
}

export default App;
