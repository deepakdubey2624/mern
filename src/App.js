import React, { Component } from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react'
import './App.css';
import {Link,Switch,Route} from 'react-router-dom';
import FoodItems from './FoodItems';
import about from './about';
class App extends Component {
  
  render() {
    return (
      <div className="ui-container">
        
        <div className="ui pointing menu">
       
         <Link className="item" to="/about">About</Link>
         <Link className="item" to="/">Community</Link>
         <Link className="item" to="/">Location</Link>
         <Link className="active orange item" to="food">Our Menu</Link>
         <Link className="item" to="/">Recepies</Link>
         <div className="right menu">
    <a className="ui item">
      Logout
    </a>
  </div>
        </div>
        <div className="ui segment">
        <Statistic.Group widths='four'>
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Saves</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value text>
        Three
        <br />Thousand
      </Statistic.Value>
      <Statistic.Label>Customers</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='food' />
        25
      </Statistic.Value>
      <Statistic.Label>Dishes</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Image src='/images/avatar/small/joe.jpg' className='circular inline' />
        42
      </Statistic.Value>
      <Statistic.Label>Team Members</Statistic.Label>
    </Statistic>
  </Statistic.Group>
  <br/>
        <Switch>
        
        <Route path="/food" component={FoodItems} />
        <Route path="/about" component={about} />
      </Switch>
      </div>
      </div>
    );
  }
}

export default App;
