import React, { Component } from 'react';
import meet from './assets/meet.PNG';
import meet1 from './assets/meet1.PNG';
import meet2 from './assets/meet2.PNG';
import meet3 from './assets/meet3.PNG';
import meet4 from './assets/meet4.PNG';
import meet5 from './assets/meet5.PNG';
import { Card, Icon, Image } from 'semantic-ui-react'
export default class community extends Component {
   
    render() {
      return (
        <div className="ui grid">
        <div className="four wide column"></div>
        <div className="two wide column">
        <div className="two column row">
    <div className="column">
    <Card>
    <Image src={meet}/>
    <Card.Content>
      <Card.Header>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</Card.Header>
      
      <Card.Description></Card.Description>
    </Card.Content>
   
  </Card>
  <Card>
    <Image src={meet5}/>
    <Card.Content>
      <Card.Header></Card.Header>
      
      <Card.Description></Card.Description>
    </Card.Content>
   
  </Card>
    </div>
   
  </div>
    
        </div>
   
     
     
        
        
        <div className="four wide column">
        <Card>
    <Image src={meet1}/>
    <Card.Content>
      <Card.Header></Card.Header>
      
      <Card.Description></Card.Description>
    </Card.Content>
   
  </Card>
  <Card>
    <Image src={meet2}/>
    <Card.Content>
      <Card.Header></Card.Header>
      
      <Card.Description></Card.Description>
    </Card.Content>
   
  </Card>
        </div>
        <div className="six wide column">
        <Card>
        <Image src={meet3}/>
    <Card.Content>
      <Card.Header>@buzzfeedfood</Card.Header>
      
      <Card.Description></Card.Description>
    </Card.Content>
   
  </Card>
  <Card>
        <Image src={meet4}/>
    <Card.Content>
      <Card.Header>@buzzfeedfood</Card.Header>
      
      <Card.Description></Card.Description>
    </Card.Content>
   
  </Card>
        </div>
    
       
      </div>
        
     
      );
    }
  }