import React, { Component } from 'react';
import locationPic from './assets/location.PNG'
export default class location extends Component {
   
    render() {
      return (
        <div class="ui grid">

  <div className="ten wide column">
  <div>
        <img src={locationPic} alt="Smiley face"/>
      </div>
  </div>
 
  
 
</div>
        
     
      );
    }
  }