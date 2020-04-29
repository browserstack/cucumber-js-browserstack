#!/usr/bin/env node
var os = require('os');
var child_process = require('child_process');
var config_file = '../conf/' + (process.env.CONFIG_FILE || 'single') + '.conf.js';
var config = require(config_file).config;
var command = '/usr/bin/env';

process.argv[0] = 'node';
process.argv[1] = './node_modules/.bin/cucumber-js';

// Check if os is windows 
if(os.platform() == "win32") {
  command = process.argv.shift();
}

for(var i in config.capabilities){
  var env = Object.create( process.env );
  env.TASK_ID = i.toString();
  var p = child_process.spawn(command, process.argv, { env: env } );
  p.stdout.pipe(process.stdout);
}
