https://teachablemachine.withgoogle.com/models/phqL0CZl0/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dEr0jhcbD/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

      if(error){
          console.error(error);
      }
      else{
          console.log(results);
          random_number_r = Math.floor(Math.random()*255) + 1;
          random_number_g = Math.floor(Math.random()*255) + 1;
          random_number_b = Math.floor(Math.random()*255) + 1;

          document.getElementById("result_label").innerHTML = 'I can hear - '+
          results[0].label;
          document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
          (results[0].confidence*100).toFixed(2)+"%";
          document.getElementById("result_label").style.color = "rgb("
          +random_number_r+","+random_number_g+","+random_number_b+")";
          document.getElementById("result_confidence").style.color = "rgb("
          +random_number_r+","+random_number_g+","+random_number_r+")";

          img = document.getElementById("cat.jfif");
          img1 = document.getElementById("dog.jfif");
          img2 = document.getElementById("cow.jfif");
          img3 = document.getElementById("lion.jfif");
          
          if(results[0].label == "meow"){
            img.src='cat.gif';
            img1.src='dog.jfif';  
            img2.src='cow.jfif';
            img3.src='lion.jfif';
          }
          else if(results[0].label == "bark"){
            img.src='cat.jfif';
            img1.src='dog.gif';  
            img2.src='cow.jfif';
            img3.src='lion.jfif';
          }
          else if(results[0].label == "moo"){
            img.src='cat.jfif';
            img1.src='dog.jfif';  
            img2.src='cow.gif';
            img3.src='lion.jfif';
          }
          else{
            img.src='cat.jfif';
            img1.src='dog.jfif';  
            img2.src='cow.jfif';
            img3.src='lion.gif';
          }
      }
    