import React, { Component } from 'react';
import bgPic from './assets/background.PNG';
export default class about extends Component {
   
    render() {
      return (
        <div class="ui grid">
  <div className="two wide column">
  </div>
  <div className="six wide column">
  <div>
        <img src={bgPic} alt="Smiley face"/>
      </div>
  </div>
  <div className="five wide column">
  
  </div>
 
</div>
        
     
      );
    }
  }