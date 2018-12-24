// css没必要上webpack吧
// 这里大概会用到 postcss和sass

const c_p_exec = require('child_process').exec;
const fs = require('fs'); // 引入fs模块
const cssmin = require('./cssmin');
const need_min = ["core.css", "util.css"];
const pack_path = "pack";
// ----------------------------------------------
// ----------------------------------------------
//
function deleteall(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (file == ".gitkeep") return;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteall(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        // fs.rmdirSync(path);
    }
};

function compressCssFile(fileName) {
    var sourceDir = `./${pack_path}/post`;
    var distDir = `./${pack_path}/dist`;

    var sourceFileName = fileName;
    var sourceFilePath = sourceDir + "/" + sourceFileName;

    var compressedFileName = sourceFileName.replace(".css", "") + ".min.css";
    var compressedFilePath = distDir + "/" + compressedFileName;

    var css = fs.readFileSync(sourceFilePath, encoding = 'utf8');
    var min = cssmin(css);
    fs.writeFile(compressedFilePath, min, function(err) {
        if (err == null) {
            console.log("compress file[" + sourceFileName + "] to file[" + compressedFileName + "] successfully ...");
        } else {
            console.log("encounter error : " + err);
        }
    });
}

function exec_cmd(script, cb) {
    c_p_exec(script, {}, typeof cb == "function" ? cb : undefined)
}

// ----------------------------------------------
// ----------------------------------------------

function parseErrMsg(text){
    let e = text.match(/{[\s\S]*}/)[0]
    return JSON.parse(e).message
}

function pack(dist_path) {
    function css_min(flist) {
        for (let f of flist) {
            compressCssFile(f);
        }
    }
    dist_path = dist_path || pack_path;
    deleteall("./" + dist_path);
    var sass_parse = `node-sass --recursive --output ./${dist_path}/css sass`;
    var postcss_auto = `postcss ./${dist_path}/css/**/*.css --dir ./${dist_path}/post --no-map --use autoprefixer`;

    exec_cmd(sass_parse, (err, sin, sout) => {
        if (err){
            console.log(parseErrMsg(err.message))
            return
        }
        console.log(sin);
        console.log(sout);
        exec_cmd(postcss_auto, (err, sin, sout) => {
            if (err){
                console.log(parseErrMsg(err.message))
                return
            }
            console.log(sin);
            console.log(sout);
            css_min(need_min);
        });
    });
}

pack()
