import Validator from "..";

const validator = new Validator();

test('userName starts with digit', () => {
  const userName = '5kitty';
  expect(validator.validateUsername(userName)).toBe(false);
});

test('userName starts with symbol', () => {
  const userName = '_kitty';
  expect(validator.validateUsername(userName)).toBe(false);
});

test('userName ends with digit', () => {
  const userName = 'kitty56';
  expect(validator.validateUsername(userName)).toBe(false);
});

test('userName ends with symbol', () => {
  const userName = 'kitty_';
  expect(validator.validateUsername(userName)).toBe(false);
});

test('userName has more than 3 digits', () => {
  const userName = 'lee4567min';
  expect(validator.validateUsername(userName)).toBe(false);
});

test('userName is correct', () => {
  const userName = 'lee25_10-min';
  expect(validator.validateUsername(userName)).toBe(true);
});