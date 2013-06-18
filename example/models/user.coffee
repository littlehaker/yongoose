mongoose = require("mongoose")
schema = new mongoose.Schema
  name:
    type: String
    required: true
  password:
    type: String
    require: true

schema.methods.hello = ->
  console.log "Hello #{@name}"

module.exports = mongoose.model("User", schema)