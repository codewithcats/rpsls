import {duel, Result} from '../../rpsls/duel';
import {Form} from '../../rpsls/form';

describe('duel', () => {

  describe('Rock vs Scissor', () => {

    it('should be Rock that win', () => {
      const result = duel(Form.ROCK, Form.SCISSOR);
      expect(result.winner).toBe(Form.ROCK);
    });

    it('should be Rock that win even if we swap a param order', () => {
      const result = duel(Form.SCISSOR, Form.ROCK);
      expect(result.winner).toBe(Form.ROCK);
    });

  });

});
