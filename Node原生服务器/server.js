let http =  require('http')

let qs = require('querystring')

let server = http.createServer(function (request,response){
    response.setHeader('content-type','text/html;charset=utf8')
    let params = request.url.split('?')[1]
    let paramsObj = qs.parse(params)
    let {username,age} = paramsObj;
    response.end(`<h1>${username}你好,你的年龄是${age}</h1>`)
})
server.listen(3000,function (err){
    if(!err) console.log('服务器启动了')
    else console.log('服务器未启动')
})