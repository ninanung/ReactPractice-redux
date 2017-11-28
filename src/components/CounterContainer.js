import Counter from "./Counter";
import * as actions from "../actions";
import { connect } from "react-redux";
import { getRandomColor } from "../utils/getRandomColor";

const stateToProps = (state) => ({
    color: state.color,
    number: state.number
});

const dispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => dispatch(actions.setColor())
});

const CounterContainer = connect(
    stateToProps,
    dispatchToProps
)(Counter);

export default CounterContainer;