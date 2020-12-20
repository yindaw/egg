//egg创建好了app之后，如果存在此文件，并且是一个方法，则其会自动运行该方法一次
module.exports = app => {
    app.locals = {
        globalTitle: "地区数据库"
    }
    app.axios = require("axios").default;
}


// app.sessionStore = {
//     async get(key) {
//         console.log("get session", key);
//         return temp[key];
//     },
//     async set(key, value, maxAge) {
//         console.log("set session", key, value, maxAge);
//         temp[key] = value;
//     },
//     async destory(key) {
        
//     }
// }