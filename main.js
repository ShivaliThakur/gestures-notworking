rediction_1= " ";
prediction_2=" ";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img src="'+data_uri+'" id="image">';
    })
}

console.log("ml5 version is", ml5.version);
classifer=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hDXljzAMT/mode.json", modelLoaded);


function modelLoaded(){
    console.log("any message");
}

function check(){
    img=document.getElementById('image');
    classifer.classify(img, gotResult);
}

function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("prediction1_name").innerHTML= results[0].label;
        document.getElementById("prediction2_name").innerHTML= results[1].label;
        prediction_1= results[0].label;
        prediction_2= results[1].label;

        

        if(prediction_1== 'Victory'){
            document.getElementById("prediction1_emoji").innerHTML="✌";
        }

        if(prediction_1== 'Thumbs up'){
            document.getElementById("prediction1_emoji").innerHTML="👍";
        }

        if(prediction_1== 'Chill'){
            document.getElementById("prediction1_emoji").innerHTML="🤘";
        }

        if(prediction_1== 'Fingers crossed'){
            document.getElementById("prediction1_emoji").innerHTML="🤞";
        }

        if(prediction_2== 'Victory'){
            document.getElementById("prediction2_emoji").innerHTML="✌";
        }

        if(prediction_2== 'Thumbs up'){
            document.getElementById("prediction2_emoji").innerHTML="👍";
        }

        if(prediction_2== 'Chill'){
            document.getElementById("prediction2_emoji").innerHTML="🤘";
        }

        if(prediction_2== 'Fingers crossed'){
            document.getElementById("prediction2_emoji").innerHTML="🤞";
        }
    }

}


function speak(){
    var synth= window.speechSynthesis;
    data1= "The first prediction is "+ prediction_1;
    data2= "and the second prediction is "+ prediction_2;
    var utterThis= new SpeechSynthesisUtterance(data1+data2);
    synth.speak(utterThis);
}

speak();