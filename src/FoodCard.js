
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
export default function FoodCard({food}){

return(
    
  
<div className="column">
  <Card>
    <Image src={food.pic}/>
    <Card.Content>
      <Card.Header>{food.title}</Card.Header>
      
      <Card.Description>{food.desc}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='pound' />
        {food.price}
      </a>
    </Card.Content>
  </Card>
  
</div>

  
 
    
 
  
    );
}