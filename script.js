var viewHighScore = document.getElementById("viewhighscore");
var count = document.getElementById("count");
var askedQuestion = document.getElementById("questions");
var start = document.getElementById("start");
var results = document.getElementById("results");
var content = document.getElementsByClassName("content");
var display = document.getElementsByClassName("display");
var choiceA = document.getElementById("choicea");
var choiceB = document.getElementById("choiceb");
var choiceC = document.getElementById("choicec");
var choiceD = document.getElementById("choiced");
var btnChoice = document.querySelectorAll(".btnchoice");
var results = document.getElementsByClassName("results");
var submit = document.getElementById("submit");
var initials = document.getElementById("initials");
var highScore = document.getElementById("highscore")
console.log(btnChoice);
var qNumber = 0;
var score = document.getElementById("score");
var time;
var sec;



start.addEventListener("click", function() {
    sec = 100;
    
    time = setInterval(myTimer, 1000);
    function myTimer() {
       count.textContent = sec;
       sec = sec - 1;
        if (sec == -1)
        clearInterval(time);
        
    }
    
    content[0].setAttribute("style", "display:none;");
    display[0].setAttribute("style", "display:block;");

    askedQuestion.innerHTML = questions[qNumber].title;
    console.log(askedQuestion)
    choiceA.innerHTML = questions[qNumber].choices[0];
    choiceB.innerHTML = questions[qNumber].choices[1];
    choiceC.innerHTML = questions[qNumber].choices[2];
    choiceD.innerHTML = questions[qNumber].choices[3];

});

btnChoice.forEach(item => {
    item.addEventListener("click", function() {
        if (item.textContent == questions[qNumber].answer) {
            document.getElementById("outcome").innerHTML = "<hr>" + "Correct!!";
        } else {
            document.getElementById("outcome").innerHTML = "<hr>" + "Wrong!!";
            sec = sec - 5;
        }   
        setTimeout(function() {
            document.getElementById("outcome").innerHTML = "";
            qNumber += 1;
            askedQuestion.innerHTML = questions[qNumber].title;
            choiceA.innerHTML = questions[qNumber].choices[0];
            choiceB.innerHTML = questions[qNumber].choices[1];
            choiceC.innerHTML = questions[qNumber].choices[2];
            choiceD.innerHTML = questions[qNumber].choices[3];

            if (askedQuestion.innerHTML === questions[9].title) {
                display[0].setAttribute("style", "display:none;");
                clearInterval(time)
                renderScore(); 
        }   
        }, 1000);  
    });
});
function renderScore() {
    score.innerHTML = sec + 1;
    console.log(sec)
    results[0].setAttribute("style", "display:block;");
}
submit.addEventListener("click", function(event){
    event.preventDefault();

    var outcome ={
        name: initials.value,
        highS: score.textContent
    }
    localStorage.setItem("score", JSON.stringify(outcome));

    var lastHighScore = JSON.parse(localStorage.getItem("score"));
    highScore.textContent = lastHighScore.name + " : " + lastHighScore.highS
});