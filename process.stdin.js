process.stdout.write("Hello ")
process.stdout.write("World \n\n\n\n")

let questions = [
  'What is your name?',
  'What is your fav hobby?',
  'What is your preferred programming language?'
]

let answers = []

const ask = i => {
  process.stdout.write(`\n\n\n ${questions[i]}`)
  process.stdout.write(' > ')
}

process.stdin.on('data', data => {
  process.stdout.write('\n' + data.toString().trim() + '\n')
})

ask(0)