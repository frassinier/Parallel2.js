import { expect } from 'chai';
import { resolveEnvironment } from '../src/Utils';


describe('Utils', () => {
  it('should resolve environment', (done) => {
    try {
      expect(resolveEnvironment()).to.equal('node');
    } catch (err) {
      done(err);
    }
  });
});
