import { expect } from 'chai';
import { increment, decrement } from '../src/actions';

describe('increment', () => {
  it('returns an object with type INCREMENT', () => {
    expect(increment()).to.eql({type: 'INCREMENT'});
  });
});

describe('decrement', () => {
  it('returns an object with type DECREMENT', () => {
    expect(decrement()).to.eql({type: 'DECREMENT'});
  });
});

