const express = require("express"); // esta chamando o express(importando)

const app = express(); // Chamando ele na página
const PORT = 3334; // a porta que ele vai abrir, no caso 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // mostrando a mensagem na porta 3333
