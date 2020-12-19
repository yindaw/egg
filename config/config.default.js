exports.keys = "duyi.com";

exports.view = {
   mapping: {
        ".ejs": "ejs"
   },
   defaultViewEngine: "ejs",
   defaultExtension: ".ejs"
}

//安全配置
exports.security = {
    csrf: {
        enable: false,
    }
}


exports.middleware = ["mymid"];

exports.mymid = {
    a: 1,
    b: 2,
    enable: true,
    match: "/login"
}
exports.$apiBase = "http://study.yuanjin.tech";