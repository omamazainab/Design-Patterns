let Context = function() {
  // by default operation is set to Addition
  this.operation = new Addition();
}

Context.prototype = {
  // sets strategy
  setStrategy: function(operation) {
    this.operation = operation;
  },
  // executes the execute function of the strategy
  execute: function(a, b) {
    return this.operation.execute(a, b);
  }
}

function Multiplication() {
  this.execute = function(a, b) {
    return a * b;
  }
}

function Addition() {
  this.execute = function(a, b) {
    return a + b;
  };
}

function Subtraction() {
  this.execute = function(a, b) {
    return a - b;
  }
}

function run() {
  // make a new context
  let context = new Context();

  context.setStrategy(new Addition());
  console.log(context.execute(1, 2));

  context.setStrategy(new Subtraction());
  console.log(context.execute(1, 2));

  context.setStrategy(new Multiplication());
  console.log(context.execute(1, 2));
}

run();
