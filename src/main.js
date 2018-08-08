import personOne from "./img/person-one.jpeg";

var personOneImg = document.getElementById("person-one");
personOneImg.src = personOne;

var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');

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
