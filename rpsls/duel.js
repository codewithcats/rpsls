import {Form} from './form';

const Result = (winner) => {
  return {winner};
}

const duel = (form1, form2) => {
  const index = (form1.index /* avoid negative */ + 5 - form2.index) % 5;
  if([1, 2].indexOf(index) >= 0) return new Result(form1);
  else if([3, 4].indexOf(index) >= 0) return new Result(form2);
  else return new Result(null);
}

export {
  duel, Result
}
