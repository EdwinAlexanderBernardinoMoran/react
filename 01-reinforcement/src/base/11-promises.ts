const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
        // reject('No se pudo entregar el dinero');
    }, 2000);
});

myPromise
    .then((money) => {
        console.log(`Tengo mi dinero ${money}`);
    }).catch((reason) => {
        console.warn(reason);
    })
    .finally(() => {
        console.log(`Puedo seguir con mi vida`);
    })