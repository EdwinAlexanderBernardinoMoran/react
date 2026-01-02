const characterNames = ['Goku', 'Vegeta', 'Gohan', 'Trunks', 'Piccolo'];

const [ firstCharacter, secondCharacter, thirdCharacter ] = characterNames;
console.log({firstCharacter, secondCharacter, thirdCharacter});

const [,,, trunks] = characterNames;
console.log({trunks});

const returnsArrayFn = () => {
    return ['ABC', 123] as const; // solo se puede usar si unicamente se va a retornar un array con esos tipos y esa cantidad de elementos
}

const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers);
