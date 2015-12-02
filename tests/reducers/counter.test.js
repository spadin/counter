import chai, { expect } from 'chai';
import { counter } from '../../src/reducers/counter';
import { Map } from 'immutable';
import chaiImmutable from 'chai-immutable'

chai.use(chaiImmutable);

describe('counter', () => {
  const countOfZero = Map({count: 0}),
        countOfOne  = Map({count: 1}),
        countOfTwo  = Map({count: 2});

  it('returns an Immutable.Map', () => {
    expect(Map.isMap(counter(undefined, {}))).to.be.true;
  });

  it('returns the initial state with count of 0', () => {
    expect(counter(undefined, {})).to.equal(countOfZero);
  });

  it('increments the count by 1', () => {
    expect(counter(countOfZero, {type: 'INCREMENT'})).to.equal(countOfOne)
  });

  it('decrements the count by 1', () => {
    expect(counter(countOfTwo, {type: 'DECREMENT'})).to.equal(countOfOne)
  });
});
