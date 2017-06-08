const randomstring = require("randomstring");

class cruise {
  constructor() {
    this.liner = randomstring.generate({length: 12, charset: 'alphabetic'});
    this.first_port = randomstring.generate({length: 12, charset: 'alphabetic'});;
    this.last_port = randomstring.generate({length: 12, charset: 'alphabetic'});;
    this.price = randomstring.generate({length: 4, charset: 'numeric'});;
  }
}

exports.createCruises = () => {
  return new cruise();
};
