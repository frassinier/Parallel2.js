import { expect } from 'chai';
import Parallel from '../src/Parallel';


const dbl = n => n * 2;

describe('Parallel', () => {
  it('should chain map calls', (done) => {
    try {
      const parallel = new Parallel([1, 2, 3]);
      const result = parallel.map(dbl);
      expect(result).to.eql([2, 4, 6]);
      done();
    } catch (err) {
      done(err);
    }
  });
});
