import personOne from "./img/person-one.jpeg";
import { facialRecognition } from "./face-recognition.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CloudmersiveValidateApiClient from 'cloudmersive-validate-api-client';
import CloudmersiveImageApiClient from 'cloudmersive-image-api-client';
import file from 'file-system';
import fs from 'fs';

var personOneImg = document.getElementById("person-one");
personOneImg.src = personOne;

// var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
// var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
// var file = require('file-system');
// var fs = require('fs');

var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = process.env.API_KEY;

var api = new CloudmersiveValidateApiClient.DomainApi()

var domain = "cloudmersive.com"; // {String} Domain name to check, for example \"cloudmersive.com\".  The input is a string so be sure to enclose it in double-quotes.


var callback = function (error, data, response) {
  if (error) {
      console.error(error);
  } else {
      console.log('API called successfully. Returned data: ' + data);
  }
};

api.domainCheck(domain, callback);

function findFace(face) {
  var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;
  var Apikey = defaultClient.authentications['Apikey'];
  Apikey.apiKey = process.env.API_KEY;

  var apiInstance = new CloudmersiveImageApiClient.FaceApi();
   var imageFile = Buffer.from(fs.readFileSync(face).buffer);

   var callback = function (error, data, response) {
        if (error) {
            console.error(error);
            response.end('Error\n');
        } else {
            console.log('API called successfully.');

            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(data, 'binary');

            response.end(data);
        }
    };
   apiInstance.faceLocate(imageFile, callback);
}

$('document').ready(function(){
  $("#person-one").click(function(){
    let clickedFace = $("#person-one");
    console.log(clickedFace);
    let selectedFace = new facialRecognition(clickedFace);
    console.log(selectedFace);
    selectedFace.findFace();
  })
})
