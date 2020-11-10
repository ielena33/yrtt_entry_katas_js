// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s) {
    // Your code here!
    hourUnit = 60 * 60 * 1000;
    minuteUnit = 60 * 1000;
    secondUnit = 1000;
    return (h == 0 ? 0 : h * hourUnit) + (m == 0 ? 0 : m * minuteUnit) + (s == 0 ? 0 : s * secondUnit);
} module.exports = { past };


module.exports = {
    past
};
