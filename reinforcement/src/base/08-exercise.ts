const useState = (name: string) => {
    return [name, (newName: string) => {
        console.log(newName);
        
    }] as const;
}

const [name, setName] = useState('Goku');

console.log(name);
setName('Vegeta');