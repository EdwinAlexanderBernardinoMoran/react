# Curso de React de cero a experto

## S2 - ¿Qué es React?

React fue creado por Jordan Walke, un ingeniero de software de Facebook, y fue lanzado públicamente en mayo de 2013. Inicialmente se desarrolló para solucionar problemas de rendimiento en el News Feed de Facebook y posteriormente se implementó en Instagram en 2012 antes de su lanzamiento público.

React es una biblioteca de JavaScript de código abierto desarrollada por Facebook para construir interfaces de usuario interactivas y componentes reutilizables. Se enfoca en la creación de aplicaciones web de una sola página (SPA) y permite a los desarrolladores crear componentes que manejan su propio estado y se componen para crear interfaces complejas.

**Que problemas resuelve ?**

- Manipulacion del DOM, hay que decir como y donde.
- Dificil de mantener, cuando una aplicacion crece, la sincronacion es complicada.
- Sin estructura clara, reutilizar codigo o dividir responsabilidades es enredado.

**Propuesta**

- Una libreria para construir interfaces, curva de aprendizaje suave
- Sintaxis - JSX / TSX
- Componentes reutilizables, parametrizables y predecibles
- DOM virtual, mejora el rendimiento.

**Estructura de un componente.**

```js
import { useState } from "react";
export function Counter{
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>Haz echo click {count} veces</p>
      <button onClick={handleClick}>Click</button>
    </>
  )
}
```

**Librerias**

- Sistemas de rutas, cambiar de pagina a pagina (React Router, Tanstack Router)
- Peticiones HTTP, tu decides como y que usar (React Query, SWR, RTK Query)
- Tu eliges las herramientas, pero tienes que mantenerlas de forma independiente.

**Frameworks para traajar con React**

- Next
- RedwoodJS
- Expo (for native apps) React Native

## S3 - Reforzamientos de JavaScript && TypeScript

Practicamente en esta seccion se hace un refuerzo de las tipos primitivos, funciones arreglos, objectos, etc.Un collback es una función que se pasa como argumento a otra función o metodo

**type**:

Un type es una definición de tipo personalizada que te permite describir cómo debe verse un dato.

```js
type Owner = "DC" | "Marvel";
```

**enum**

Es una forma de definir un conjunto de valores constantes con nombre, para representar opciones fijas y evitar usar “strings mágicos” o números sin significado en el código.

```js
enum Estado {
  Activo,
  Inactivo,
  Suspendido
}
```

Las enumeraciones `(enum)` sí se transpilan a JavaScript, mientras que las interfaces `(interface)` y los tipos `(type)` no pasan a JavaScript, ya que solo existen en tiempo de compilación para el tipado.

## S4 - Primeros pasos en react.

Se recomienda declarar las constantes fuera del componente de React cuando su valor no cambia. Esto se debe a que, cada vez que ocurre un cambio de estado, el componente se vuelve a renderizar. Al mantener las constantes, funciones o variables que no dependen del estado ni de las props fuera del componente, se evita su recreación innecesaria en cada render, mejorando así el rendimiento y la organización del código.

### Estilos Css en JSX

- Primera forma de aplicar estilos Css a un componente

```js
export function MyAwosemeApp() {
  return (
    <>
      <p
        style={{
          backgroundColor: "#fafafa",
          borderRadius: 10,
          padding: 10,
        }}
      >
        Hola mundo
      </p>
    </>
  );
}
```

- Segunda forma de aplicar estilos CSS.

```js
import type { CSSProperties } from "react"; // Para obtener el intelisense dentro del editor (VSC)

const myStyles = {
  backgroundColor: "#fafafa",
  borderRadius: 10,
  padding: 10,
};
export function MyAwosemeApp() {
  return (
    <>
      <p style={myStyles}>Hola mundo</p>
    </>
  );
}
```

### Eventos de los elementos

**onClick**: es un evento que se ejecuta cuando el puntero del mouse entra en el área de un elemento HTML.

```js
function Boton() {
  const handleMouseEnter = () => {
    console.log("El mouse entró al botón");
  };

  return <button onMouseEnter={handleMouseEnter}>Pasa el mouse aquí</button>;
}
```

**onMouseEnter**: es un evento que se ejecuta cuando el usuario hace clic sobre un elemento (con el mouse, touch o teclado).

```js
function Boton() {
  const handleClick = () => {
    alert("¡Botón clickeado!");
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
}
```

## S5 - Pruebas automaticas - Unit testing

No son una perdida de tiempo, vale la pena garantizar calidad, detectan errores, facilitan mantenimiento, aceleran desarrollo con integraciones continuas y despliegues seguros.

### Tipos de pruebas

**Unitarias**: Enfocada en partes atómicas.

- Pruebas automaticas simples
- Se recomienda no tener dependencias de otros componentes
- Debe de ser especializada en la pieza que estamos probando.

**Integración**: Como reaccionan varias piezas en conjunto?.

- Como funcionan elementos en conjunto.
- No deben de ser mayores a las unitarias

**E2E - End to End**: Ejecuta todo un flujo continuo como si fuera el proceso que realizaría un usuario.

- Un flujo aislado
- Objetivo especifico.
- Pruebas de casos improbables.

Principalmente debemos de enfocarnos en las pruebas unitarias, empezando por la piezas más pequeñas y desacopladas.

### Caracteristicas de las pruebas automaticas

Toda prueba automatica debe de respetar lo siguiente:

**Caracteristicas**:

- Faciles de escribir
- Faciles de leer
- Rapidas
- Flexibles

### El triple A (AAA)

- **Arranger (Arreglar)**: Importaciones, inicializaciones
- **Act (Actuar)**: Aplicar estimulos, llamar metodos, simular clicks.
- **Assert(Afirmar)**: Que debe de haber sucedido?

### Pruebas automaticas

El archivo es recomendado que se llame de la siguiente forma `example.test.ts` es de tener en cuenta que el codigo de la prueba pueda que este malo, o puede que el codigo de la aplicacion cambio y este mala o puede que ambos esten bien o es de ajustar la prueba y ahi es donde se debe indagar y ver que es lo que esta saliendo mal.

```js
import { expect, test } from "vitest";
import { add } from "./math.helper"; // Proviene de otro archivo

describe("MyAwosomeApp", () => {
  test("should add two positives numbers", () => {
    // 1. Arrange
    const a = 1;
    const b = 1;

    // 2. Act
    const result = add(a, b);

    // 3. Assert
    expect(result).toBe(a + b);
  });
});
```

### Pruebas sobre componentes de React

Para hacer pruevas de componentes es necesario instalar otras dependencias para ver el funcionamiento similar o identico al DOM `Testing Library`. Se utiliza para las interacciones propiamente de los componentes como los clicks, etc. En este caso montaremos un componente similiar a cuando se ve en chrome.

```shell
npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom
```

- Luego es de hacer un pequeño cambio en el archivo `vite.config.ts`

```js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
})``;
```

- Luego automaticamente se descargara el paquete `jsondom`
- Todo esto hace un panorama similar o igual a lo que se muestra en las herramientas de desarrollo, se pueden acceder a un DOM virtual.

**container**: Solo se actualiza cuando se manda a llamar la funcion `render`

```js
describe("MyAwosomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwosemeApp />);

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Edwin");
    expect(h3?.innerHTML).toContain("Moran");
    console.log(h1?.innerHTML);
  });
});
```

**screen**: No se actualiza cuando se manda a llamar la funcion `render` si no que tambien cuando sucede interaccion con el DOM como un click, etc.

```js
describle("MyAwosomeApp", () => {
  test("should render firstName and lastName - screen", () => {
    render(<MyAwosemeApp />);

    screen.debug();

    const h1 = screen.getByTestId("first-name-title"); // hace referencia a un data-testid con ese nombre dentro del componente
    expect(h1.innerHTML).toContain("Edwin");
    console.log(h1.innerHTML);
  });
});
```

**snapshot**: Un snapshot es una técnica de testing que permite guardar una “foto” del renderizado de un componente y compararla en ejecuciones futuras para detectar cambios inesperados en la UI.

```js
import { render } from "@testing-library/react";
import Boton from "./Boton";

test("renderiza correctamente el botón", () => {
  const { container } = render(<Boton />);
  expect(container).toMatchSnapshot();
});

test("renderiza correctamente el botón", () => {
  render(<Boton />);
  expect(screen.getByTestId("div-app")).toMatchSnapshot(); // Este data-testid="div-app" se le coloca a un div que envuelve todo el componente, la forma recomendad de hacerla es la primera forma.
});
```

**eventos**: Es una forma de similar clicks o cualquier accion de un usuario en el DOM virtual.

```js
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should increase count when +1 button is pressed", () => {
    const name = "Test item three";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [buttonAdd] = screen.getAllByRole("button");
    console.log(buttonAdd.innerHTML);

    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    const name = "Test item four";
    const quantity = 5;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [, buttonSubtract] = screen.getAllByRole("button");
    console.log(buttonSubtract.innerHTML);

    fireEvent.click(buttonSubtract);
    expect(screen.getByText("4")).toBeDefined();
  });
});
```

**componentes ficticios - Mock componentes, argumentos especificos**

El "`mocking`" es fundamental para las pruebas unitarias. Permite probar un componente de forma aislada, evitando que su prueba dependa del comportamiento o de las dependencias (ej. llamadas a API) de sus hijos.

En esta sección se utilizan componentes ficticios (mocks) para validar:

- Cuántas veces un componente es renderizado.
- Qué propiedades (props) recibe en cada renderizado.

Esta técnica es especialmente útil cuando un componente se renderiza dentro de un `map` o `forEach`, y queremos asegurarnos de que se invoque el número correcto de veces con los datos esperados.

Para lograrlo, se utiliza la función `vi.mock` de Vitest, junto con un mock function `(vi.fn)` que nos permite espiar las llamadas al componente.

```js
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

// Se crea el componente
const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

// Se define una función mock que simula el comportamiento del componente ItemCounter. Luego se reemplaza el componente real por el mock usando vi.mock:
vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {
  // Para evitar interferencias entre tests, se limpian todos los mocks después de cada ejecución
  afterEach(() => {
    vi.clearAllMocks();
  });

  // Toma de fotografia del componente
  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  // Verificación del número de renderizados
  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter");
    console.log(itemCounters.length);

    expect(itemCounters.length).toBe(3);
  });

  // Validación de llamadas y argumentos
  test("should render ItemCounter components with correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch",
      quantity: 10,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Pro Controller",
      quantity: 20,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Smash",
      quantity: 0,
    });
  });
});
```
