//Require Mongoose
var express = require('express');
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    userStatus: { type: String, required: true }
});

var User = mongoose.model('Author', UserSchema);

