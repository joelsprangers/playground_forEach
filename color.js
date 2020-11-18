
let colors = ['yellow', 'blue', 'red', 'orange'];

let printWhile = function (myColor) {
    let arrayLength = 0;
    while (arrayLength < myColor.length) {
        console.log(colors[arrayLength]);
        arrayLength++;
    }
}

printWhile(colors);

let printFor = function () {
    for (i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
}

printFor(colors);

colors.forEach(color => console.log(color));



const colorScheme = {
    tone: 'blues',
    numberOfColors: 2,
    sets: [3, 2323, 'wqew', 23, 23]
};

for (const property in colorScheme) {
    console.log(`${property}: ${colorScheme[property]}`);
}