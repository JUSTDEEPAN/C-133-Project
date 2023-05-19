x = 0;
y = 0;
draw_apple = "";
draw_orange = "";

function preload() 
{
    orange = loadImage('https://i.postimg.cc/GH2QzX5v/download-10.jpg');
    apple = loadImage('https://i.postimg.cc/D8McN19H/download-9.jpg');
}

   

var SpeechRecognition =  window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML  = "The System is listening please speak"
    recognition.start();
    recognition.onresult = function(event) {

        console.log(event);

        var content = event.results[0][0].transcript;

        document.getElementById("status").innerHTML = "The Speech is being recognized as:" + content;
        if (content == "apple")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "Drawing apple...";
            draw_apple = "set";        
        }
        if (content == "orange")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "Drawing orange...";
            draw_orange = "set";        
        }

    }
}

function setup() {
canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_apple == "set")
    {
        
        image(apple, 30, 30);
        document.getElementById("status").innerHTML = "apple";
        draw_apple = "";        
    }
 
    if (draw_orange == "set")
    {
        
        image(orange, 30, 30);
        document.getElementById("status").innerHTML = "Drawn orange";
        draw_orange = "";        
    }
}