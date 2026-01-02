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
