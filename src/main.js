import personOne from "./img/person-one.jpeg";
import { facialRecognition } from "./face-recognition.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'YOUR_API_KEY'
});

var personOneImg = document.getElementById("person-one");
personOneImg.src = personOne;


function findFace(face) {
  let promise = new Promise(function(resolve, data, reject) {
      let request = new XMLHttpRequest();
      let url = Apikey;
      data = face;
      console.log(data);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("POST", data, true);
      request.send();
    });
   apiInstance.faceLocate(imageFile, callback);
}

$('document').ready(function(){
  $("#person-one").click(function(){
    let clickedFace = $("#person-one");
    console.log(clickedFace);
    findFace(clickedFace);
  })
})
