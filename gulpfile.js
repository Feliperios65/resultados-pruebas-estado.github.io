//compilar sass
const{src, dest} = require("gulp");
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
    done();
}
exports.css = css;
exports.mirar = mirar;