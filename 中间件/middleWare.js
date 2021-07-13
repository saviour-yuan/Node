const express = require('express')
// const bodyParser = require('body-parser')
//用于解析post参数
const app = express();

// app.use('/',(request,response,next) => {
//
//     request.demo = '2021'
//     next();
//     // if(request.get('Referer')){
//     //     let miniquery = request.get('Referer').split('/')[2]
//     //     if(miniquery === 'localhost:63342'){
//     //         next()
//     //     }else {
//     //         response.sendFile(__dirname +'/public/err.png')
//     //     }
//     // }else {
//     //     next();
//     // }
// })

app.use(express.urlencoded({extended:true}))
//解析post请求体中所携带的urlencoded编码形式的参数为一个对象,随后挂在到request对象上
app.use(express.static(__dirname +'/public'))
app.get('/',(request,response) => {
  response.send('这是主页')
    console.log(request.demo)
})
app.get('/food',(request,response) => {
  response.send('这是美食主页')
    console.log(request.demo)
})
app.get('/picture',(request,response) => {
  response.sendFile(__dirname + '/public/demo.jpg')
})
app.get('/meishi',(request,response) => {
    response.send('这是food主页')
})
app.get('/shenghuo',(request,response) => {
    response.send('这是生活主页')
})
app.get('/yule',(request,response) => {
    response.sendFile(__dirname +'/public/yule.html')
})

app.post('/test',(request,response) => {
    console.log(request.body)
    response.send('这是post请求的主页')
})

app.listen(3000,(err) => {
  if(!err) console.log('ok')
    else console.log(err)
})