const express = require('express');
const req = require('express/lib/request');
const app = express();


app.get('/', (req, res) => {
    // 发送请求对象中的查询参数作为 JSON 响应
    res.send({
        message: 'Hello World!',
        query: req.query,      // 获取查询参数
        headers: req.headers   // 获取请求头
    });
});

app.get('/todo')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/a/b', (req, res) => {
    res.send('Hello123!');
});

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
