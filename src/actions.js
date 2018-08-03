export  const SET_FOOD = 'SET_FOOD';

export function setFood(food){
    return {
        type:SET_FOOD,
        food

    }
}



export function fetchFoodItem(){
    return dispatch => {
        fetch('/api/food').then(res => res.json()).then(data => dispatch(setFood(data.food)));
    }
}