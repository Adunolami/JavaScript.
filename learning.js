
for (let n = 0; n < 12; n++){
    console.log(`Multipication Table ${n}`)
    for(let i = 0; i < 12; i++){
        console.log(`${n} * ${i} = ${n * i}`)
    }
}
//looping1-8

for(let d = "#"; d.length < 8; d += "#"){
    console.log(d);
}

//fizzbuzz
for (let j = 1; j <= 100; j++) {
    if (j % 3 == 0 && j % 5 == 0) {
        console.log("FizzBuzz");
    } else if (j % 3 === 0) {
        console.log("Fizz");
    } else if (j % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(j);
    }
}

// mario







