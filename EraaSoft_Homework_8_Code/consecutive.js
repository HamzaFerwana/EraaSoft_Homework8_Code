function consecutive (array, number) {
    let log = [];
for(let i = 0; i < array.length; i++) {
    if(array[i] + array[i+1] == number) {
        log.push(true);
    } else {
        log.push(false);
    }
}
console.log(log.includes(true));
return log.includes(true);
}