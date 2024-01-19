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
src/layout layout par a el sitio <extends src="layout.html" locals='{ "id": "as__home", "top":"" }'>
src/partials son los includes <include src="home/banners.html"></include>
src/pages contiene las páginas del sitio

Para los banners src/partials/home/banners.html
