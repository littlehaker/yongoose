// Generated by CoffeeScript 1.6.3
(function() {
  var Repl, fs, mongoose, path;

  mongoose = require("mongoose");

  Repl = require('repl');

  require('colors');

  fs = require('fs');

  path = require('path');

  module.exports.start = function(conn_str, model_path, is_coffee) {
    var files, repl;
    if (is_coffee) {
      require('coffee-script');
    }
    mongoose.connect(conn_str);
    console.log(("" + conn_str + " connected").green);
    files = fs.readdirSync(model_path);
    files.forEach(function(file) {
      return require(model_path + '/' + file);
    });
    repl = Repl.start('Yongoose> ');
    require('repl.history')(repl, process.env.HOME + '/.node_history');
    repl.on('exit', function() {
      return process.exit();
    });
    repl.context.mongoose = mongoose;
    Object.keys(mongoose.models).forEach(function(k) {
      repl.context[k] = mongoose.models[k];
      return console.log(("" + k + " loaded").blue);
    });
    repl.displayPrompt();
    return repl.context.p = repl.context.print = function() {
      console.log.apply(console, arguments);
      repl.context._arguments = repl.context._args = arguments;
      repl.context._1 = arguments[1];
      repl.context._0 = arguments[0];
      return repl.displayPrompt();
    };
  };

}).call(this);
