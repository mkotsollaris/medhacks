/**
 * Created by fkuang on 9/24/2016.
 */

var app = require('express');
var http = require('http').Server(app);

var OpenBCIBoard = require('openbci').OpenBCIBoard;
var ourBoard = new OpenBCIBoard();
ourBoard.connect("12345") // Port name is a serial port name, see `.listPorts()`
    .then(function() {
        ourBoard.on('ready',function() {
            ourBoard.streamStart();
            ourBoard.on('sample',function(sample) {
                /** Work with sample */
                for (var i = 0; i < ourBoard.numberOfChannels(); i++) {
                    console.log("Channel " + (i + 1) + ": " + sample.channelData[i].toFixed(8) + " Volts.");
                    // prints to the console
                    //  "Channel 1: 0.00001987 Volts."
                    //  "Channel 2: 0.00002255 Volts."
                    //  ...
                    //  "Channel 8: -0.00001875 Volts."
                }
            });
        });
    })
