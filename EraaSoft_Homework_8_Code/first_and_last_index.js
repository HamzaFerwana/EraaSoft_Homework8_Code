function first_last_index (array, character) {
let string = array.join("");
let firstIndex = string.indexOf(character);
let lastIndex = string.lastIndexOf(character);
console.log('First index of ' + character + ': ' + firstIndex);
console.log('Last index of ' + character + ': ' + lastIndex);
return [firstIndex, lastIndex];
}