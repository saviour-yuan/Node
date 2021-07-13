const express= require('express')

const app = express();



app.get('/demo',(req,res) => {
  res.send('我啥都没种')
})
app.get('/demo1',(req,res) => {
  let obj = {school:'auguigu',subject:'qianudan'}
  res.cookie('peiqi',JSON.stringify(obj))
  res.send('demo1路由反馈,种下了一个会话cookie')

})
app.get('/demo2',(req,res) => {
  res.cookie('peiqi','hello',{maxAge:1000*5})
  res.send('demo1路由反馈,种下了一个持久化cookie')

})
app.listen(3000,(err) => {
  if(!err) console.log('演示cookie服务器启动成功了')
    else console.log(err)
})