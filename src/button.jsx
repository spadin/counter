import React from 'react';
import { connect } from 'react-redux';

const Button = ({action, dispatch, children}) => (
  <button onClick={() => {dispatch(action)}}>{children}</button>
);
export default connect()(Button);

