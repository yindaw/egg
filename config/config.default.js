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
    },
    domainWhiteList: ["www.domian.com"]
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
        port: 7000
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

//配置错误处理
// config/config.default.js
// module.exports = {
//     onerror: {
//       all(err, ctx) {
//         // 在此处定义针对所有响应类型的错误处理方法
//         // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
//         ctx.body = 'error';
//         ctx.status = 500;
//       },
//       html(err, ctx) {
//         // html hander
//         ctx.body = '<h3>error</h3>';
//         ctx.status = 500;
//       },
//       json(err, ctx) {
//         // json hander
//         ctx.body = { message: 'error' };
//         ctx.status = 500;
//       },
//       jsonp(err, ctx) {
//         // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
//       },
//     },
//   };

exports.$apiBase = "http://study.yuanjin.tech";