exports.keys = "duyi.com";
const path = require("path");

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



//与日志星相关的配置
exports.logger = {
    dir: path.resolve(__dirname, "../logs"),
    appLogName: "duyi-app-web.log",
    level: "DEBUG",
    outputJSON: true,
}

exports.customLogger = {
        scheduleLogger: {
            file: path.resolve(__dirname, "../logs/schedule.log")
    }
}


exports.$apiBase = "http://study.yuanjin.tech";