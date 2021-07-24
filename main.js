var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function starter(){
document.getElementById("text_box").innerHTML = "";
Recognition.start();    
}
Recognition.onresult = function(event){
console.log(event);
var contana = event.results[0][0].transcript;
console.log(contana);
document.getElementById("text_box").innerHTML = contana;
if(contana == "take my selfie"){
console.log("takie selfiiiiiiiiieeeeeeeeee");
speak();
}  
}
function speak(){
var I_PHONE = window.speechSynthesis;
var sp_da = "taking your selfie in 5 seconds";
var phone_stand = new SpeechSynthesisUtterance(sp_da);
I_PHONE.speak(phone_stand);
Webcam.attach(camera);
setTimeout(function (){
take_snapshot();
save();
},5000);    
}
Webcam.set({
width: 320,
height: 240,
image_format: 'png',
png_quality: 90
});
camera = document.getElementById("camera");
function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id = "science_textbook" src = "' + data_uri + '">';
});
}
function save(){
var download_the_selfie = document.getElementById("linkie");
var img_img = document.getElementById("science_textbook").src;
download_the_selfie.href = img_img;
download_the_selfie.click();  
}