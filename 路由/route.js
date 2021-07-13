let express = require('express')
let app = express()


// reques和response 都有什么API
// request.query	获取get请求查询字符串的参数，拿到的是一个对象
// request.params	获取get请求参数路由的参数，拿到的是一个对象
// request.body	获取post请求体，拿到的是一个对象（要借助一个中间件）
// request.get(xxxx)	获取请求头中指定key对应的value


// response.send()	给浏览器做出一个响应
// response.end()	给浏览器做出一个响应（不会自动追加响应头）
// response.download()	告诉浏览器下载一个文件
// response.sendFile()	给浏览器发送一个文件
// response.redirect()	重定向到一个新的地址（url）
// response.set(header,value)	自定义响应头内容
// response.get()	获取响应头指定key对应的value
// res.status(code)	设置响应状态码

// 一级路由
app.get('/',(request,response) => {
  response.send('我是根路由返回的数据')
})
app.post('/',(request,response) => {
    response.send('我是根路由返回的数据')
})
// 二级路由
app.get('/meishi',(request,response) => {
    response.send('我是demo路由返回的数据')
})
app.get('/mp3',(request,response) => {
    response.download('./bee.mp3')
})
// 参数路由
app.get('/meishi/:id',(request,response) => {
    console.log(request.params);
    let {id} = request.params;
    response.send(`你好,我是${id}商家`)
})

app.listen(3000,(err) => {
  if(!err) console.log('ok')
    else console.log(err)
})