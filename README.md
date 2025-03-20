
# Endless Background ZZZ

## Descripción

Este proyecto recrea un fondo animado similar al que aparece en **Zenless Zone Zero (ZZZ)**. La idea surgió al ver el efecto de desplazamiento del fondo en ese juego y pensar en cómo podría adaptarse a una página web. El código está diseñado para que cualquiera pueda adaptarlo y modificarlo según sus necesidades.

Es un **fondo animado** que se desplaza de manera continua, y permite personalizar aspectos como el tamaño de la fuente, la velocidad de desplazamiento, la dirección del movimiento y los colores.

## Características

- Fondo animado de texto con un desplazamiento infinito.
- Totalmente personalizable, con variables clave que pueden ser ajustadas en el código.
- Ideal para usar en sitios web, creando un ambiente dinámico y atractivo.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/AnDev-000/endless-background-zzz.git
    ```

2. Abre el proyecto en tu editor de código favorito (como Visual Studio Code).

3. Modifica los archivos **index.html**, **main.js**, y **style.css** según tus necesidades.

## Configuración

Existen varios aspectos clave del código que puedes modificar para personalizar el fondo animado. A continuación te explico los parámetros más importantes:

### 1. Tamaño de la Fuente

En el archivo `style.css`, puedes cambiar el tamaño de la fuente para los diferentes idiomas (español, inglés, japonés) ajustando los siguientes valores:

```css
span.español {
  font-size: 3440%;
}
span.ingles {
  font-size: 1100%;
}
span.japonés {
  font-size: 900%;
}
```

### 2. Velocidad de Desplazamiento

La velocidad del fondo animado puede ser controlada en el archivo `main.js`, específicamente en la configuración del `setInterval`:

```javascript
const velocidad = 50; // Ajusta este valor para cambiar la velocidad
```

### 3. Dirección del Movimiento

Puedes cambiar la dirección del movimiento de las letras en el archivo `main.js`. Actualmente, el texto se desplaza de derecha a izquierda:

```javascript
// Dirección del movimiento: -1 es hacia la izquierda, 1 hacia la derecha
const direccion = -1; // Cambia a 1 para que se mueva hacia la derecha
```

### 4. Color del Fondo y el Texto

En el archivo `style.css`, puedes modificar los colores de fondo y texto del fondo animado. Busca las siguientes líneas y cámbialas según tu preferencia:

```css
.background-marquee {
  background-color: #000000; /* Cambia este valor para cambiar el color de fondo */
}

.marquee {
  color: #ffffff; /* Cambia este valor para cambiar el color del texto */
}
```

## Contribución

Si deseas mejorar o modificar este proyecto, siéntete libre de hacer un **fork** del repositorio y realizar tus contribuciones. Cualquier mejora será bienvenida.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
