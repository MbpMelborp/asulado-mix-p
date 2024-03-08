http://asulado-cdn-mbp.s3-website-us-east-1.amazonaws.com/renta_vitalicia/

Primera vez:

npm i

Flujo de trabajo normal

1. Arrancamos el servidor para ver cambios

npm run watch -> esto es para que compile los cambios y genere la carpeta dist

2. Arrancamos el servidor para ver en web

npm run devp -> monta el servidor interno http://localhost:8000

3. Una vez ya este todo listo en ambiente local se compila para producción

npm run prod -> genera el compilado final

4. Se hace commit en el repositorio por el vscode

Si se hacen cambios en los assets se le avisa a Arcangel para que actualice el CDN de ellos

5. en la carpeta fina/ busco el cod y pag que modifique en src primero formatenado el doc con shift + alt + f copio el cod

6. Abro en Salesforce y agrego o modifico el cod y guardo, y se prueba en prod

lo que se cambia esta en

src/css -> estilos app.css sitio y portal.css -> portal

tailwind.config.js contiene la configuración de tailwind

src/js -> js para sitio app.js y portal.js -> portal

Las imagenes siempre en dist/assets/images

LARAVEL MIX

src/layout layout par a el sitio <extends  src="layout.html"  locals='{ "id": "as__home", "top":"" }'>

src/partials son los includes <include  src="home/banners.html"></include>

src/pages contiene las páginas del sitio

Para los banners src/partials/home/banners.html

<!-- You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.

* ERRORs: 0

* WARNINGs: 1

* ALERTS: 1 -->

<h2>

![alt_text](asulado.webp "image_tooltip")

</h2>

<h2>Asulado </h2>

<p>Especificaciones técnicas de proyecto para el sitio web y portal transaccional

Pruebas: [http://asulado-cdn-mbp.s3-website-us-east-1.amazonaws.com/](http://asulado-cdn-mbp.s3-website-us-east-1.amazonaws.com/)

Producción: https://www.asulado.com/

<h2>Entorno:</h2>

El sitio web está basado en el estándar HTML + CSS y JAVASCRIPT en un entorno de desarrollo con Node.js en la versión 18.

<h3>Detalles del proyecto:</h3>

<h5>Nombre del repositorio:</h5>

Repositorio privado en github:asulado-mix-p

<h4>Tecnologías clave:</h4>

- [Laravel Mix](https://laravel-mix.com/) v6: (compilación y optimización de recursos)

- Es una herramienta de compilación que facilita la gestión de tareas de Webpack en tu aplicación. Laravel Mix ofrece una API fluida para definir estas tareas, simplificando el proceso de compilación y optimización de recursos estáticos como JavaScript, CSS e imágenes.

- Si bien Laravel Mix se utiliza con frecuencia en proyectos Laravel, también es compatible con cualquier proyecto JavaScript, independientemente del framework o la arquitectura que se esté utilizando.

- [Tailwind CSS](https://tailwindcss.com/) v3: (marco CSS de utilidad primero)

<h4>Scripts de ejecución</h4>

- "watch": "npx mix watch": ejecuta Laravel Mix en modo "watch". Laravel Mix es una herramienta de compilación para Laravelque para este proyecto ejecuta solo html, javascript y html. El modo "watch" significa que Mix seguirá ejecutándose y recompilará tus archivos automáticamente cada vez que detecte un cambio en ellos.

- "prod": "npx mix --production": Este script ejecuta Laravel Mix en modo de producción. Esto significa que Mix compilará tus archivos para producción, lo que generalmente implica minificar y optimizar los archivos para un rendimiento óptimo.

- "devp": "cd dist && python3 -m http.server": Este script cambia al directorio "dist" y luego inicia un servidor HTTP simple usando Python. Para probar el proyecto en un entorno local.

<h4>Estructura de carpetas principales</h4>

**.github/:** contiene archivos de configuración para GitHub, como flujos de trabajo de GitHub Actions encargado de montar en un bucket S3 de AWS el directorio **dist **con un compilado general navegable antes de pasarlo al entorno Salesforce.

**final/:** Código fuente final de tu proyecto para montarlo en Salesforce. Incluye varias subcarpetas que podrían representar diferentes secciones o características de tu aplicación.

**dist/:** Código fuente de pruebas y de stage en el bucket s3 para visualización para el cliente antes de pasar a producción. Este contiene además los assets de imágenes que luego son sincronizados a el cdn propio de Asulado para producción.

**src/:** Contiene el código fuente principal de tu proyecto.

**node_modules/: **Módulos del proyecto.

<h4>Archivos de configuración:</h4>

<h5>webpack.mix.js</h5>

Este archivo webpack.mix.js es una configuración para Laravel Mix, una herramienta de compilación que proporciona una API fluida para definir tareas de compilación de Webpack para tu aplicación. Aunque Laravel Mix se utiliza comúnmente en proyectos Laravel, también se puede utilizar en cualquier proyecto JavaScript.

- Inicio: Comienza el proceso de compilación y seguimiento con npx mix watch.

- Limpieza inicial: Se ejecuta rimraf("prod/\*") para limpiar el directorio de producción antes de empezar la compilación.

- Compilación de JavaScript: Se compilan los archivos JavaScript:

- src/js/app.js a dist/assets/js/app.js

- src/js/portal.js a dist/assets/js/portal.js

- Compilación de CSS con PostCSS: Se compilan los archivos CSS:

- src/css/app.css

- src/css/portal.css

- src/css/forms.css \

Cada uno a su respectivo lugar en dist/assets/css/.

- Generación de HTML: Se generan archivos HTML basados en los archivos fuente ubicados en ./src/pages/\*_/_.html y se colocan en el directorio dist, utilizando la configuración especificada en config_html.

- Configuración de PostCSS: Se definen opciones adicionales para PostCSS, incluyendo plugins como postcss-import, tailwindcss, y autoprefixer.

- Verificación de Modo de Producción: Se verifica si el proceso se está ejecutando en modo de producción con mix.inProduction().

- Si es producción:

- Limpieza de carpeta final/assets: Se ejecuta rimraf("final/assets") para limpiar la carpeta de assets en el directorio final.

- Copiado de dist a final: Se copia el contenido del directorio dist al directorio final.

- Reemplazo de rutas en HTML: Se reemplazan las rutas de los assets en los archivos HTML dentro del directorio final para apuntar al CDN final.

- Eliminación de clases de debug: Se eliminan las clases debug-screens de los archivos HTML en el directorio final.

- Limpieza final de carpeta final/assets: Se realiza una limpieza final de la carpeta final/assets.

- Si no es producción, el flujo sigue hacia el final sin realizar las operaciones exclusivas de producción.

- Fin: Se finaliza el proceso de compilación y seguimiento.

<h5>tailwind.config.js</h5>

El archivo tailwind.config.js es la configuración principal para Tailwind CSS, un marco de CSS de utilidad primero. Este archivo permite personalizar todos los aspectos de las utilidades generadas por Tailwind.

- **content:** Este campo especifica los archivos en los que Tailwind debe buscar clases. En este caso, Tailwind buscará en todos los archivos HTML en el directorio src/ y sus subdirectorios.

- **theme:** Este campo permite personalizar los valores predeterminados de Tailwind. Aquí se están extendiendo las fuentes y colores predeterminados de Tailwind. Por ejemplo, se está definiendo una nueva familia de fuentes llamada "je" y se están agregando varios colores personalizados como "primary", "secondary", "BG", "disabled", "azul", "alpha", y "amarillo".

- **listStyleImage y backgroundImage:** Estos campos permiten personalizar las imágenes de lista y de fondo respectivamente. Aquí se están definiendo varias imágenes de lista y de fondo personalizadas.

- **daisyui**: Este campo es específico para DaisyUI, un plugin para Tailwind CSS que proporciona componentes de UI listos para usar. Aquí se está definiendo un tema personalizado para DaisyUI.

- **plugins:** Este campo permite agregar plugins a Tailwind. Aquí se están agregando varios plugins, incluyendo "tailwindcss-animate" para animaciones, "tailwindcss-debug-screens" para depuración, "daisyui" para componentes de UI, y "@tailwindcss/typography" para tipografía.

<h4></h4>

<h4>Estructura de carpeta /src</h4>

La carpeta **/src** es donde se almacenan los archivos fuente del proyecto que luego se compilan para producción. Esta carpeta contiene varios subdirectorios importantes:

**css/:** contiene los archivos de estilos CSS del proyecto. Estos archivos se compilan y minifican para producción.

- app.css: Contiene los estilos globales para el sitio web de contenidos..

- portal.css: Contiene los

- forms.css: los formularios en del portal transaccional teniendo en cuenta lo que se imprime desde Salesforce

**js/:** contiene los archivos JavaScript del proyecto. Estos archivos se compilan y minifican para producción.

- app.js: Son los script que se manejan para el sitio web de contenidos

- portal.js:Son los scripts para el portal transaccional

**layouts/:** contiene los archivos de layout de Laravel Mix. Los layouts son plantillas que se utilizan para mantener una apariencia consistente en varias páginas. Por ejemplo, un layout puede incluir elementos comunes como la cabecera, el pie de página y la barra de navegación.

**pages/:** contiene los archivos HTML de las páginas individuales del sitio. Cada archivo en representa una página única en el sitio web.

**partials/:** contiene fragmentos de código reutilizables, conocidos como "partials". Los partials pueden incluir cualquier cosa, desde un encabezado de página hasta un componente de interfaz de usuario, como un botón. Se pueden incluir en layouts y páginas para evitar la repetición de código.

Laravel Mix se utiliza para compilar y optimizar los archivos en la carpeta /src. Por ejemplo, puede compilar archivos css con @apply en CSS usando las utilidades y clases predefinidas de tailwind, transpilar JavaScript moderno a una versión que sea compatible con navegadores más antiguos, y minificar el código para producción. La configuración de Laravel Mix se encuentra en el archivo webpack.mix.js explicado anteriormente.

<h4>Acciones de github y publicación en Bucket S3 de AWS</h4>

<h6>/.github/workflows/main.yaml</h6>

El archivo main.yaml es una configuración de flujo de trabajo de GitHub Actions. GitHub Actions permite automatizar, personalizar y ejecutar tus flujos de trabajo de desarrollo de software directamente en tu repositorio de GitHub. Puedes descubrir, crear y compartir acciones para realizar cualquier tarea que desees, incluyendo CI/CD, y combinar acciones en un flujo de trabajo.

Descripción del flujo de trabajo:

- name: Upload ASSETS: Este es el nombre del flujo de trabajo.

- on: push: branches: - main: Este flujo de trabajo se activará cuando se haga push a la rama main.

- jobs: deploy: runs-on: ubuntu-latest: Define un trabajo llamado deploy que se ejecuta en la última versión de Ubuntu.

- steps:: Define los pasos que se ejecutan en este trabajo.

  - uses: actions/checkout@master: Este paso utiliza la acción actions/checkout@master para comprobar el repositorio en el runner, permitiendo que el flujo de trabajo acceda a su contenido.

  - uses: jakejarvis/s3-sync-action@master: Este paso utiliza la acción jakejarvis/s3-sync-action@master para sincronizar un directorio (o un solo archivo) de tu repositorio a un bucket de AWS S3.

- with: args: --acl public-read --follow-symlinks --delete: Estos son los argumentos que se pasan a la acción. En este caso, los archivos subidos al bucket S3 serán de lectura pública, los enlaces simbólicos serán seguidos y los archivos que existan en el bucket S3 pero no en el directorio de origen serán eliminados.

- env:: Define las variables de entorno para este paso.

- AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET  }}: El nombre del bucket S3 donde se subirán los archivos. Este valor se recupera de los secretos del repositorio.

- AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID  }} y AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY  }}: Las credenciales utilizadas para autenticarse con AWS. Estos valores también se recuperan de los secretos del repositorio.

- SOURCE_DIR: "dist": El directorio en tu repositorio que se sincronizará con el bucket S3.
