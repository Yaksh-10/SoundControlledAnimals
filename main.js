//Lion Tiger Cat Megalodon
//https://teachablemachine.withgoogle.com/models/UHbwpJ4VW/

function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UHbwpJ4VW/model.json', modelready)
 
}
function modelready()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById('sound').innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById('accuracy').innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+'%';
        document.getElementById('sound').style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById('accuracy').style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
        img1 = document.getElementById('cat');
        img2 = document.getElementById('tiger');
        img3 = document.getElementById('lion');
        img4 = document.getElementById('shark');
        
        if (results[0].label == 'Cat')
        {
            img1.src = 'catG.gif';
            img2.src = 'tiger.png';
            img3.src = 'lion.png';
            img4.src = 'shark.png';
        }
        else if (results[0].label == 'Lion')
        {
            img1.src = 'cat.png';
            img2.src = 'tiger.png';
            img3.src = 'lionG.gif';
            img4.src = 'shark.png';
        }
        else if (results[0].label == 'Megaladon')
        {
            img1.src = 'cat.png';
            img2.src = 'tiger.png';
            img3.src = 'lion.png';
            img4.src = 'sharkG.gif';
        }
        else if (results[0].label == 'Tiger')
        {
            img1.src = 'cat.png';
            img2.src = 'tigerG.gif';
            img3.src = 'lion.png';
            img4.src = 'shark.png';
        }
    }
}