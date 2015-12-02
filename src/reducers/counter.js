import { Map } from 'immutable';

export const counter = (state = Map({count: 0}), { type }) => {
  switch (type) {
    case 'INCREMENT':
      return state.updateIn(['count'], count => (count + 1));
    case 'DECREMENT':
      return state.updateIn(['count'], count => (count - 1));
    default:
      return state;
  }
};
