// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str) {
    // You code here!
    // newWord = str.substring(1) + str[0] + "ay";

    var process = function (s) {
        if (s.length < 2) {
            return s;
        }
        return s.substring(1) + s.charAt(0) + "ay";
    };
    var result = '';
    var buffer = '';

    for (var i = 0; i < str.length; i++) {
        var c = str[i];

        if (c.match(/[a-zA-Z]/i)) {
            buffer += c;
        } else {
            if (buffer.length) {
                result += process(buffer);
                buffer = '';
            }
            result += c;
        }
    }

    result += process(buffer);
    buffer = '';

    return result;
}




module.exports = {
    pigLatin
};

