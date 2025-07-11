# 📡 Ejercicios de Fetch + JSON Server

Este directorio contiene ejemplos y ejercicios relacionados con el uso de **`fetch()`** para realizar peticiones HTTP, en conjunto con **`json-server`** como servidor de datos simulado.

La mayoría de los ejercicios requieren que tengas **`json-server` instalado y corriendo** correctamente.

---

## 🔧 Requisitos: Instalar JSON Server

`json-server` permite crear rápidamente una API REST falsa usando un archivo `.json` como base de datos. Ideal para probar `fetch()` sin necesidad de un backend real.

### 🛠 Instalación global:

```bash
npm install -g json-server
````

### ✅ Verificar instalación:

```bash
json-server --version
```

Deberías ver un número de versión, lo que indica que está instalado correctamente.

---

## 🚀 Ejecutar JSON Server

### ▶️ Modo principal: observar un archivo `db.json`:

```bash
json-server --watch db.json
```

Esto iniciará un servidor en `http://localhost:3000`, donde los datos definidos en `db.json` estarán disponibles como endpoints REST (`/users`, `/posts`, etc.).

### 🟡 Modo simple (sin observar cambios):

```bash
json-server db.json
```

Usado cuando no necesitas que el servidor detecte cambios en tiempo real.

---

## 🔁 Ejecutar múltiples servidores JSON

Si necesitas correr más de un servidor `json-server` al mismo tiempo (por ejemplo, para trabajar con diferentes archivos de datos), simplemente cambia el puerto:

```bash
json-server db1.json --port 3001
json-server db2.json --port 3002
```

Asegúrate de que el puerto esté libre.

---

## 🌐 Servidor local de desarrollo (sin Go Live)

En lugar de depender de extensiones como "Go Live", se utiliza **Vite**, un servidor de desarrollo rápido y moderno compatible con módulos ES y proyectos frontend modernos.

### ⚙️ Configurar Vite

1. Inicializa el proyecto (si no lo has hecho):

   ```bash
   npm init -y
   ```

2. Instala Vite como dependencia de desarrollo:

   ```bash
   npm install -D vite
   ```

3. Añade un script en tu `package.json`:

   ```json
   "scripts": {
     "dev": "vite"
   }
   ```

4. Ejecuta el servidor:

   ```bash
   npm run dev
   ```

   Esto abrirá tu proyecto en un puerto local (por ejemplo `http://localhost:5173`) y recargará los cambios automáticamente.

---

## 📌 Recomendaciones

* Mantén tus archivos `db.json` bien estructurados (con objetos clave como `users`, `posts`, etc.).
* Usa herramientas como Postman o tu navegador para inspeccionar los endpoints (`http://localhost:3000/users`).
* Asegúrate de que el servidor esté activo antes de probar peticiones `fetch()`.

---

## 📂 Archivos relacionados

* `db.json`: Archivo de datos que actúa como base de datos REST.
* `script.js`: Código JavaScript que realiza peticiones `fetch`.
* `index.html`: Página de prueba que consume datos del servidor.

---

Si necesitas ayuda para entender cómo funciona `fetch()`, cómo manejar errores o cómo trabajar con múltiples endpoints, puedes consultar el archivo [`READMEfetch-conceptos.md`](READMEfetch-conceptos.md).