import type { CSSProperties } from "react";

const firstName = 'Edwin';
const lastName = 'Moran';
const isActive = true;

const address = {
    zipCode: '12345',
    city: 'New York'
};

const favoriteGames = [
    'The Legend of Zelda: Breath of the Wild',
    'God of War',
    'Red Dead Redemption 2'
];

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
}

export function MyAwosemeApp() {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p style={myStyles}>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <p
                style={{
                    backgroundColor: '#fafafa',
                    borderRadius: 10,
                    padding: 10,
                }}
            >{address.zipCode}, {address.city}</p>
        </>
    )
}