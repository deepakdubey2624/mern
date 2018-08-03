import React from 'react';
import  FoodCard from './FoodCard'
export default function FoodItemList({food}){

    const emptyMessage = (
        <p>There are no Food Items in Your Collection.</p>
    );

    const foodItemList = (
        <div className="ui three column doubling stackable grid container">
        <div className="row">
        {food.map(item => <FoodCard food={item} key={item._id}/>)}
  </div>
      
        </div>
        
    );

    return(
<div>
{food.length === 0 ? emptyMessage:foodItemList}
</div>
    );
}

// FoodItemList.propTypes = {
//     food: React.PropTypes.array.isRequired
// }