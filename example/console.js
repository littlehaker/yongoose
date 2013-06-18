var yongoose = require('../index');
yongoose.start(
  "mongodb://localhost/test", // Mongoose collect to mongodb://localhost/test 
  __dirname + "/models", // Model directory. do NOT use ./models!
  true // Is model file a coffee file?
);
