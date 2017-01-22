# Rithm-School
Jquery 

broswer / client
browsers issues a request and handle responses from server

server/ file server: machines that exist to serve information
database: serve information to the requester

http: governs the communication between browser and server
- you can only send text via HTTP
"s" - stands for secure

domain name / host: is the address name 

/name: this is a route 

404 Error: is a status code(200 - ok, 300 - redirect 400 client error, 500 server error)

HTTP:
- get request:
- post request 

Response headers: meta information about the request and the response you are getting.

AJAX: HTTP request that doesnt require you to refresh the page
XMHR(XMLHttprequest) object in javascaript that allows us to get a full page request w/out refresh.

blocking - synchronous code stops you from doing other things while waiting for a response from the server.
we now use asychronous javascript and XML which is AJAX. 

to initialize AJAX in jquery, you can type $.ajax

JSON - javascript object notation. created by douglass crockford. this is a string reponse. 
$.getJSON(url)
- this returns a promise (a value return at a later point in script)
$.getJSON(url).then(function(){
	
})
