const { src, dest, watch , parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const webp = require('gulp-webp');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}

// css es una función que se puede llamar automáticamente cuando se ejecuta Gulp
function css() {
    // src(paths.scss): Obtiene todos los archivos SCSS ubicados en el directorio especificado en paths.scss
    return src(paths.scss)
        // .pipe(sourcemaps.init()): Inicializa los mapas de origen (source maps) para facilitar la depuración
        .pipe(sourcemaps.init())
        
        // .pipe(sass()): Usa el paquete gulp-sass para compilar los archivos SCSS a CSS
        .pipe(sass())
        
        // .pipe(postcss([autoprefixer(), cssnano()])): Procesa el CSS con PostCSS, añadiendo prefijos automáticamente (autoprefixer) y minimizando el archivo (cssnano)
        .pipe(postcss([autoprefixer(), cssnano()]))
        
        // .pipe(sourcemaps.write('.')): Escribe el mapa de origen en el mismo directorio donde se guarda el archivo CSS
        .pipe(sourcemaps.write('.'))
        
        // .pipe(dest('./build/css')): Finalmente, guarda el archivo CSS procesado en el directorio './build/css'
        .pipe( dest('./build/css') );
}

function javascript() {
    // src(paths.js): Obtiene todos los archivos JS ubicados en el directorio especificado en paths.js
    return src(paths.js)
      
      // .pipe(sourcemaps.init()): Inicializa los mapas de origen (source maps) para facilitar la depuración
      .pipe(sourcemaps.init())
      
      // .pipe(concat('bundle.js')): Concatena todos los archivos JavaScript en un solo archivo llamado 'bundle.js'
      .pipe(concat('bundle.js')) // Nombre final del archivo concatenado
      
      // .pipe(terser()): Minimiza (minifica) el código JavaScript usando la librería 'terser' para reducir su tamaño
      .pipe(terser())
      
      // .pipe(sourcemaps.write('.')): Escribe el mapa de origen en el mismo directorio donde se guarda el archivo JS
      .pipe(sourcemaps.write('.'))
      
      // .pipe(rename({ suffix: '.min' }))): Renombra el archivo final agregando el sufijo '.min' (por ejemplo, 'bundle.min.js')
      .pipe(rename({ suffix: '.min' }))
      
      // .pipe(dest('./build/js')): Guarda el archivo JS procesado en el directorio './build/js'
      .pipe(dest('./build/js'))
}

function imagenes() {
    // src(paths.imagenes): Obtiene todos los archivos de imágenes ubicados en el directorio especificado en paths.imagenes
    return src(paths.imagenes)
      
      // .pipe(cache(imagemin({ optimizationLevel: 3 }))): Comprime las imágenes usando 'imagemin' con un nivel de optimización de 3 (lo que indica cuán agresiva será la compresión)
      .pipe(cache(imagemin({ optimizationLevel: 3})))
      
      // .pipe(dest('build/img')): Guarda las imágenes optimizadas en el directorio 'build/img'
      .pipe(dest('build/img'))
      
      // .pipe(notify({ message: 'Imagen Completada' }))): Muestra una notificación indicando que la optimización de las imágenes ha sido completada
      .pipe(notify({ message: 'Imagen Completada'}));
}

function versionWebp() {
    // src(paths.imagenes): Obtiene todos los archivos de imágenes ubicados en el directorio especificado en paths.imagenes
    return src(paths.imagenes)
      
      // .pipe(webp()): Convierte las imágenes al formato WebP, que es un formato de imagen más eficiente en cuanto a compresión y calidad
      .pipe(webp())
      
      // .pipe(dest('build/img')): Guarda las imágenes convertidas en el directorio 'build/img'
      .pipe(dest('build/img'))
      
      // .pipe(notify({ message: 'Imagen Completada' }))): Muestra una notificación indicando que la conversión de las imágenes ha sido completada
      .pipe(notify({ message: 'Imagen Completada'}));
}

function watchArchivos() {
    // watch(paths.scss, css): Observa los cambios en los archivos SCSS (definidos en paths.scss) y ejecuta la función 'css' cuando se detecta un cambio
    watch( paths.scss, css );
    
    // watch(paths.js, javascript): Observa los cambios en los archivos JavaScript (definidos en paths.js) y ejecuta la función 'javascript' cuando se detecta un cambio
    watch( paths.js, javascript );
    
    // watch(paths.imagenes, imagenes): Observa los cambios en las imágenes (definidas en paths.imagenes) y ejecuta la función 'imagenes' cuando se detecta un cambio
    watch( paths.imagenes, imagenes );
    
    // watch(paths.imagenes, versionWebp): Observa los cambios en las imágenes (definidas en paths.imagenes) y ejecuta la función 'versionWebp' cuando se detecta un cambio
    watch( paths.imagenes, versionWebp );
}
  
exports.default = parallel(css, javascript,  imagenes, versionWebp, watchArchivos ); 