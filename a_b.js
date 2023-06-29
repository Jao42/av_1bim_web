const process = require('process')

// a
process.stdin.write('Digite sua idade: ')

// b
process.stdin.on('data', (idade) => {
  console.log('Sua idade é: ' + idade)
  process.exit()
})



