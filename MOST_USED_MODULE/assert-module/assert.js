const assert = require('assert');


// the module assert is used to perform some test on value provided
// if the test is not positive then assert with throw an AssertError with the provided message is displayed 

// 1. assert(value, message)
// Checks if the value is truthy, if not, it throws an AssertionError with the provided message
assert(true, 'This will not throw an error');



// assert.equal(actual, expected, message)
// Tests shallow, coercive equality with the == operator.
assert.equal(1, '1', 'Equal with coercion');

// 11. assert.notEqual(actual, expected, message)
// Tests shallow, coercive inequality with the != operator.
assert.notEqual(1, 2, 'Not equal');



// 2. assert.deepEqual(actual, expected, message)
// Tests for deep equality between the actual and expected parameters.
assert.deepEqual([1, 2, 3], [1, 2, 3], 'Arrays are equal');

// 9. assert.notDeepEqual(actual, expected, message)
// Tests for deep inequality between the actual and expected parameters.
assert.notDeepEqual([1, 2, 3], [3, 2, 1], 'Arrays are not deeply equal');



// 10. assert.notDeepStrictEqual(actual, expected, message)
// Similar to assert.notDeepEqual but uses the SameValueZero algorithm.
assert.notDeepStrictEqual({ a: 1 }, { a: '1' }, 'Objects are not deeply equal');

// 3. assert.deepStrictEqual(actual, expected, message)
// Similar to assert.deepEqual but uses the SameValueZero algorithm.
assert.deepStrictEqual({ a: 1 }, { a: 1 }, 'Objects are deeply equal');



// 4. assert.doesNotMatch(value, regex, message)
// Asserts that the provided value does not match the regular expression.
assert.doesNotMatch('I have 10 cats', /dogs/, 'No dogs found');

// 8. assert.match(value, regex, message)
// Asserts that the provided value matches the regular expression.
assert.match('I have 5 dogs', /dogs/, 'Dogs found');



// 15. assert.strictEqual(actual, expected, message)
// Tests for strict equality between the actual and expected parameters.
assert.strictEqual(1 + 1, 2, '1 + 1 is not equal to 2');

// 12. assert.notStrictEqual(actual, expected, message)
// Tests for strict inequality between the actual and expected parameters.
assert.notStrictEqual(1, '1', 'Not strictly equal');



// 7. assert.ifError(value)
// Tests if the value is falsy; if it's a truthy value, it throws the value.
assert.ifError(0);



// 13. assert.ok(value, message)
// Tests if the value is truthy, if not, it throws an AssertionError with the provided message.
assert.ok(1, 'Truthy value');



// 14. assert.rejects(asyncFn, error, message)
//Asserts that the async function rejects with a certain error.
assert.rejects(
  async () => {
    throw new Error('Rejected');
  },
  { name: 'Error' },
  'Async function should reject with a certain error'
);



// 6. assert.fail(message)
// Throws an AssertionError with the provided message.
assert.fail('Failed!');

