// css没必要上webpack吧
// 这里大概会用到 postcss和sass

const c_p_exec = require('child_process').exec;
const fs = require('fs'); // 引入fs模块
function deleteall(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if(file==".gitkeep")return;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteall(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        // fs.rmdirSync(path);
    }
};

function exec_cmd(script, cb) {
    c_p_exec(script, {}, typeof cb == "function" ? cb : undefined)
}

function pack(dist_path){
    dist_path = dist_path || "dist"
    deleteall("./"+dist_path)
    var sass_parse = `node-sass --recursive --output ./${dist_path}/css sass`
    var postcss_auto = `postcss ./${dist_path}/css/**/*.css --dir ./${dist_path}/post --no-map --use autoprefixer`

    exec_cmd(sass_parse, (err,sin,sout) => {
        if(err)console.log(err)
        console.log(sin)
        console.log(sout)
        exec_cmd(postcss_auto)
    })
}

pack()
