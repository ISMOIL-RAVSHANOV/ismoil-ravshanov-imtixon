//10
function between(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

const numbers = between(1, 6);
console.log(numbers);