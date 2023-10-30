var Barking = "0";
var Meoing = "0";
var Mooing = "0";
var Roar = "0";

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/y9p8AkB25/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error){
        console.log(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_count").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        if (results[0].label == "Barking"){
            document.getElementById("animal_image").src = "dog.png";
        } else if (results[0].label == "Meoing"){
            document.getElementById("animal_image").src = "cat.jpg";
        }  else if (results[0].label == "Mooing"){
            document.getElementById("animal_image").src = "cow.png";
        } else if (results[0].label == "Roar"){
            document.getElementById("animal_image").src = "lion.jpg";
        } else{
            document.getElementById("animal_image").src = "listen.gif";
        }
    }
}
