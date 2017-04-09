import * as Immutable from "immutable";
import {IState, IStateImmutable} from "./models";

// This is the default state, given by the exercise
let initialState: IState = {
    person: {
        name: "world",
        surname: "the"
    }
};

// It is a best practice to have the state immutable because of `(previousState, action) => newState`
let immutableInitialState: IStateImmutable = Immutable.fromJS(initialState);

export default function helloApp(state: IStateImmutable = immutableInitialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}