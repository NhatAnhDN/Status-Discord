const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("Chờ 30s sẽ có status ")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("CHỜ 5S SẼ CÓ STATUS")});
}
module.exports = keepAlive




