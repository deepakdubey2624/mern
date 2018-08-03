import {SET_FOOD} from '../actions';
export default function food(state =[], action ={}){
    switch(action.type){
        case SET_FOOD:
        return action.food;
        default:return state;
    }
}