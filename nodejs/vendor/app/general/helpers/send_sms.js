let request = require('request');
let Options = require('../models/SMS_options')

let send_sms = async (phone, sms)=>{
    const options = new Options(phone, sms)
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
};

module.exports = send_sms