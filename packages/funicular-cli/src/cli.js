const program = require('commander');
const version = require('./../package.json').version;
const chalk = require('chalk');

program.version(version);

program
  .command('new')
  .description('Bootstrap a new Funicular project')
  .action(require('./new'));

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(chalk.cyan);
}
