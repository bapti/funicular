const vorpal = require('vorpal')();

vorpal
  .command('foo')
  .description('Outputs "bar".')
  .action(function(args, callback) {
    this.log('bar');
    callback();
  });

vorpal
  .delimiter('fun$')
  .show();
