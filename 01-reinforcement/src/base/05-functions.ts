const greet = (name: string): string => {
    return `Hello, ${name}!`;
}
// Simplificación cuando solo hay una línea de retorno

const greetTwo = (name: string): string => `Hello, ${name}!`;

const message = greet('Edwin');
const messageTwo = greetTwo('Edwin');
console.log(message, messageTwo);

interface User {
    uid: string;
    username: string;
}

const getUser = (): User => {
    return {
        uid: 'ABC123',
        username: 'edwin_eb',
    }
}
// Simplificación cuando solo hay una línea de retorno
const getUserTwo = (): User => ({
    uid: 'ABC123',
    username: 'edwin_eb',
})

const user = getUser();
const userTwo = getUserTwo();

console.log(user, userTwo);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// Un collback es una función que se pasa como argumento a otra función o metodo
myNumbers.forEach((value) => {
    console.log({value});
})

// Optimizacion
myNumbers.forEach(console.log);