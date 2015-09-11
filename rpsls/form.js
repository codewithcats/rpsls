const Form = function(shape, index) {
  this.shape = shape;
  this.index = index;
};

Form.ROCK = new Form('Rock', 5);
Form.SPOCK = new Form('Spock', 6);
Form.PAPER = new Form('Paper', 7);
Form.LIZARD = new Form('Lizard', 8);
Form.SCISSOR = new Form('Scissor', 9);

export {
  Form
}
