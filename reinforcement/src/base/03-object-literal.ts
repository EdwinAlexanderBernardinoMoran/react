const iroman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 40,
    isAvenger: true,
    address: {
        postalCode: '10880, 90265',
        street: 'Malibu Point',
        city: 'Malibu',
    }
}

// Rompe las referencias del primer nivel si hay mas objetos anidados los pasa tal cual
// Los objetos en JavaScript pasan por referencia
// const spiderman = {...iroman};

const spiderman = structuredClone(iroman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 21;
spiderman.address.street = 'New York Street 123';

console.log(spiderman, iroman);