import { useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

// type TrafficLightColor = 'red' | 'yellow' | 'green'; // Otra forma de definir los posibles valores
type TrafficLightColor = keyof typeof colors; // Extrae las llaves del objeto colors como un tipo y los sincronizamos en caso lleguemos a cambiar los colores

export const TrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red')
    const handleChangeLight = (color: TrafficLightColor) => {
        // setLight(color) // Actualiza el estado con el color seleccionado

        // Función con valor previo antes de ser cambiado
        setLight((prev) => {
            console.log(prev);
            return color
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <div className={`w-32 h-32 ${ light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${ light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${ light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}
                <div className="flex gap-2">
                    <button onClick={() => handleChangeLight('red')}
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Rojo
                    </button>
                    <button onClick={() => handleChangeLight('yellow')}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Amarillo
                    </button>
                    <button onClick={() => handleChangeLight('green')}
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Verde
                    </button>
                </div>
            </div>
        </div>
    );
};