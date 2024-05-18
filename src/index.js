export default class Validator {
  validateUsername(name) {
    const allowedCharacters= /^(\w|-)+$/;
    const notStartWithDigitOrSymbol = /^[^\d_-]/;
    const notEndWithDigitOrSymbol = /[^\d_-]$/;
    const noMoreThanThreeDigits = /^(?:(?!\d{4}).)*$/;

    return (allowedCharacters.test(name) && notStartWithDigitOrSymbol.test(name) && notEndWithDigitOrSymbol.test(name) && noMoreThanThreeDigits.test(name));
  }
}
