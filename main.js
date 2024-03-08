https://teachablemachine.withgoogle.com/models/10s8wuM9A/



function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WXurWflaz/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}