const express = require('express')

const app = express();
//让你的服务器知道你在用那一个模板引擎-----配置模板引擎
app.set('view engine','ejs')
// 让你的服务器知道你的模板在哪个目录下,配置模板目录
app.set('views','./haha')

//如果在express中基于node搭建的服务器,使用ejs无需引用
app.get('/show',(request,response) => {
  let personArr = [
    {name:'kobe',age:4},
    {name:'aliluya',age:5},
    {name:'demaxiya',age:6}
  ]
  response.render('person',{person:personArr})
})
app.listen(3000,(err) => {
  if(!err) console.log('ok')
    else console.log('err')
})