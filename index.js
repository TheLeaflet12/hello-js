const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Привет с моего телефона!');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});

console.log("Привет GitHub");
console.log("Это мой второй коммит");
