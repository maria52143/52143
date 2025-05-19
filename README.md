# 🧠 Analizador de Lenguaje DSL con ANTLR4 y JavaScript

Este proyecto implementa un **analizador léxico y sintáctico** utilizando **ANTLR4** y **JavaScript**, basado en una gramática en notación EBNF para un lenguaje específico (DSL). El analizador toma como entrada un archivo (`input.txt`) con código fuente escrito en ese lenguaje, y realiza una serie de tareas de análisis e interpretación.

## 📌 Enunciado del Proyecto

El proyecto debe procesar sentencias con la siguiente estructura:

```
accion 'nombreAccion' {
  moverArchivo "a" "ruta"
  usarEscaneoProfundo
  retornar "resultado"
  notificar "mensaje"
}
```

### Ejemplo de Código DSL

```
accion 'log_error' { notificar 'Error durante el procesamiento.' }
```

### Traducción esperada en JavaScript

```javascript
const logError = function() {
  console.log("NOTIFICACION: Error durante el procesamiento.");
}
logError();
```

## ✅ Funcionalidades implementadas

1. **Análisis léxico y sintáctico**: Detecta si la entrada cumple con la gramática definida. En caso de error, indica la línea y la causa.
2. **Tabla de lexemas-tokens**: Genera una tabla que asocia cada lexema con su token reconocido.
3. **Árbol de análisis sintáctico**: Construye el árbol sintáctico y lo muestra como representación de la estructura del código.
4. **Interpretación**: Traduce las sentencias del DSL al lenguaje **JavaScript** y ejecuta el resultado como lo haría un intérprete básico.

## 💻 Clonar y ejecutar en Visual Studio Code

### 📥 Clonar el repositorio

1. Abrí **Visual Studio Code**.
2. Presioná `Ctrl + Shift + P` y escribí **Git: Clone**.
3. Pegá el siguiente enlace:

   ```
   https://github.com/maria52143/52143.git
   ```

4. Elegí una carpeta local para guardar el proyecto.
5. Aceptá la opción de abrirlo directamente en VS Code.

> ⚠️ Asegurate de tener **Git** y **Node.js** instalados previamente.

## 🛠️ Requisitos

- [Node.js](https://nodejs.org/)
- [ANTLR4](https://www.antlr.org/)
- Extensión de **ANTLR4 grammar syntax** (opcional en VS Code)
- Editor: [Visual Studio Code](https://code.visualstudio.com/)

## 🚀 Cómo ejecutar el analizador

> *(Ajustá esto si tu estructura difiere)*

1. Instalá dependencias (si usás npm):
   ```bash
   npm install
   ```
2. Ejecutá el analizador sobre `input.txt`:
   ```bash
   node index.js
   ```

## 📂 Estructura del proyecto

```
├── input.txt              # Código fuente a analizar
├── src/
│   ├── DSL.g4             # Gramática ANTLR
│   ├── lexer/parser       # Archivos generados por ANTLR
│   └── index.js           # Script principal de ejecución
├── README.md              # Este archivo
└── package.json           # Dependencias y scripts
```

## 👩‍💻 Autora

**María José**  
🔗 [GitHub: maria52143](https://github.com/maria52143)
