import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodItemList from './FoodItemList';
import {fetchFoodItem} from './actions';
class FoodItems extends Component {
    componentDidMount(){
    this.props.fetchFoodItem();
    }
    render() {
      return (
        <div className="row">
          <FoodItemList food={this.props.food}/>
        </div>
      );
    }
  }
//  FoodItems.prototype={
//      food: React.PropTypes.array.isRequired
//  }
  function mapStateToProps(state){
      return {
          food:state.food
      }
  }
  export default connect(mapStateToProps,{fetchFoodItem})(FoodItems);