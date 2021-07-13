// 引入express
const express = require('express')
// 创建app服务对象
const app = express()
// 禁止服务器返回X-powered-by
app.disable('x-powered-by')

// 配置路由
app.get('/',function (request,response){
  response.send('这是主页')
})
app.get('/meishi',function (request,response){
  response.send('这是美食页面')
})
app.get('/hotel',function (request,response){
  response.send('这是酒店页面')
})

app.post('/',function (request,response){
  response.send('这是主页,你发送的是post请求')
})
app.listen(3000,(err) => {
  if(!err) console.log('服务器启动成功')
  else console.log('服务器启动失败')

})