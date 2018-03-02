process.stdout.write("Hello ")
process.stdout.write("World \n\n\n\n")

let questions = [
  'What is your name?',
  'What is your fav hobby?',
  'What is your preferred programming language?'
]

let answers = []

const ask = i => {
  process.stdout.write(`\n\ ${questions[i]}`)
  process.stdout.write(' > ')
}

process.stdin.on('data', data => {
  // process.stdout.write('\n' + data.toString().trim() + '\n')
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  process.stdout.write('\n\n\n')
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later.`)
  process.stdout.write('\n\n\n')
})

ask(0)