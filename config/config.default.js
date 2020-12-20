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

//配置redis
exports.redis = {
    client: {
        port: 6379,
        host: "127.0.0.1",
        password: "",
        db: 0
    }
}


exports.cluster = {
    listen: {
        port: 5000,
    }
}


exports.$apiBase = "http://study.yuanjin.tech";