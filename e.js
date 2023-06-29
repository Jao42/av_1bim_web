fs = require('fs')
let frase = 'Uma frase com minha matricula 202010040036\n'
fs.appendFile('./avaliacao.txt', frase, (err) => console.log)

