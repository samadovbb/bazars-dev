const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const {secret} = require("../../../config/config.json").app;
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

module.exports = [
    express.static('public'),

    // bodyParser.json(),
    bodyParser.urlencoded({extended:true}),

    cookieParser(secret),

    fileUpload({
        limits: { fileSize: 10 * 1024 * 1024 },
    }),

    session({
        secret: secret,
        resave: false,
        saveUninitialized: false,
        // store path should be out of working directory
        store: new FileStore({ path: require('path').join(__dirname, '../../../../') + './session-store' }),
        cookie: { maxAge: 12*3600000, secure: false, httpOnly: false }
    })
]