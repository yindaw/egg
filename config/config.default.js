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

exports.$apiBase = "http://study.yuanjin.tech";