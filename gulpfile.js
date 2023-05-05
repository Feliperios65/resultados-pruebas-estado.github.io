//compilar sass
const{src, dest, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber")
function css(done){
    src("src/sass/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"))
    done();
}
//cambios en tiempo real
const {watch} = require("gulp")
function mirar(done){
    watch("src/sass/**/*.scss",css)
    watch("src/js/**/*.js",javascript)
    done();
}
function javascript(done){
    src("src/js/app.js")
        .pipe(dest("build/js"))
    done();
}
exports.css = css;
exports.mirar = parallel(mirar, javascript);
exports.javascript = javascript;