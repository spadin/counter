import React from 'react';
import ReactDOM from 'react-dom';
import { increment, decrement } from './actions';
import { connect } from 'react-redux';
import Button from './button';

const App = ({count}) => (
  <div>
    <h1>The count is {count}</h1>
    <Button action={increment()}>+</Button>
    <Button action={decrement()}>-</Button>
  </div>
);
const mapStateToProps = ({counter}) => ({ count: counter.get('count') });
export default connect(mapStateToProps)(App);

