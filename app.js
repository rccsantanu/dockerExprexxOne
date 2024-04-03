const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

app.get('/', (req, res) => {
    res.send('Hello, World1234!');
});

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});

