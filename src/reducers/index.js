import * as types from "../actions/ActionTypes";
import { getRandomColor } from "../utils/getRandomColor";

const initialState = {
    color: "black",
    number: 0
};

const counter = (state, action) => {
    switch(action.type) {
        case types.INCREMENT: 
            return {
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                number: state.number - 1
            }
        case types.SET_COLOR:
            return {
                number: state.number,
                color: getRandomColor()
            }
        default:
            return initialState;
    }
};  

export default counter;