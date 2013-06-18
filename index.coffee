mongoose = require("mongoose")
Repl = require('repl')
require('colors')
fs = require('fs')
path = require('path')

module.exports.start = (conn_str, model_path, is_coffee) ->
  if is_coffee then require('coffee-script')
  mongoose.connect(conn_str)
  console.log "#{conn_str} connected".green

  files = fs.readdirSync(model_path)
  files.forEach (file) ->
    require(model_path + '/' + file)
  repl = Repl.start('Yongoose> ')

  require('repl.history')(repl, process.env.HOME + '/.node_history');

  repl.on 'exit', -> process.exit()

  repl.context.mongoose = mongoose
  Object.keys(mongoose.models).forEach (k) ->
    repl.context[k] = mongoose.models[k];
    console.log "#{k} loaded".blue
  repl.displayPrompt() 

  repl.context.p = repl.context.print = () ->
    console.log.apply console, arguments
    repl.context._arguments = repl.context._args = arguments
    repl.context._1 = arguments[1]
    repl.context._0 = arguments[0]
    repl.displayPrompt() 