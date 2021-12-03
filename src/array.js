const joinArr = (arr = []) => arr.join('-');

const clearSame = (arr) => [...new Set(arr)];

exports.joinArr = joinArr;
exports.clearSame = clearSame;
