Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var Textbox=document.getElementById("textbox");
function start(){
    Textbox.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
console.log(event);
var Content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=Content;
var Content_minuscula=Content.toLowerCase();
if(Content_minuscula=="whisky"){
    console.log("palabra"+Content_minuscula);
    speak();
}

}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="tomando tu selfie en 4 segundos";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        toma_la_foto();
        salvar();
    },4000);
}
function toma_la_foto(){
Webcam.snap(function(data_uri){
    document.getElementById("selfie").innerHTML='<img id="selfie_imagen"src="'+data_uri+'"/>';
});
}
function salvar(){
link=document.getElementById("link");
image=document.getElementById("selfie_imagen").src;
link.href=image;
link.click();
}