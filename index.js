#!/usr/bin/env node
const { program } = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const { createPassword } = require('./utils/createPassword')
const { savePasswordToFile } = require('./utils/savePassword')

program.version('1.0.0').description('Simple password generator.')
program
  .option('-l, --length <number>', 'length of password to be generated.', '8')
  .option('-s, --save', 'save generated password to passwords.txt')
  .option('-nn, --no-numbers', 'generate password with no numbers')
  .option('-ns, --no-symbols', 'generate password with no symbols')
  .parse()

const { help, length, save, numbers, symbols } = program.opts()

/* get generated passwords */
const generatedPasswords = createPassword(length, numbers, symbols)

/* save to file */
if (save) {
  savePasswordToFile(generatedPasswords)
}

/* copy to clipboard */
clipboardy.writeSync(generatedPasswords)

/* output generated passwords */
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPasswords))
log(chalk.yellow('Password copied to clipboard!'))
