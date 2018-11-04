var x;
var trivia = {
    
    set:[ {
      question1: "What is the primary food source for coral reefs?",
      answers: ["Plankton", "Sunlight", "Human Souls", "Small Fish"],
      correct: 0,
    },
    {
        question1: "Plankton largely reside in what part of the ocean?",
        answers: ["Twighlight Zone", "Sunlight Zone", "Thermocline Zone", "Pelagic Zone"],    
        correct: 2,

      },
      {
        question1: "The Bering Strait lies between which two continents?",
        answers: ["Asia & Africa", "North America & Asia", "Europe & Africa", "North America & South America"],    
        correct: 1,

      },
      {
        question1: "What is the largest fish in the world?",
        answers: ["Hagfish", "Blue Whale", "Dolphin", "Whale Shark"],    
        correct: 3,

      },
       {
        question1: "How many different ways can a marine worm species reproduce?",
        answers: ["None", "1", "18", "5"],    
        correct: 2,

      },
       {
        question1: "What is considered Deep Sea?",
        answers: ["100ft","350ft","650ft", "1000ft"],    
        correct: 2,
        
      },
      {
        question1: "Which of these is considered the deepest dwelling fish?",
        answers: ["clownfish","Snailfish","tuna","sturgeon"],    
        correct: 1,
        
      },
      {
        question1: "How much of breathable oxygen is produced by the ocean?",
        answers: ["10%","30%","50%","70%"],    
        correct: 3,
        
      },
      {
        question1: "About how much of the worlds oceans have been explored?",
        answers: ["5%","10%","30%","85%"],    
        correct: 0,
        
      },
      {
        question1: "About how fast can bluefin tuna swim?",
        answers: ["11mph","28mph","32mph","43mph"],    
        correct: 3,
        
      },
    ],




    startgif:"#",
    correctgifs:["correct1.gif","correct2.gif","correct3.gif","correct4.gif","correct5.gif"],
    incorrectgifs:["Incorrect1.gif","Incorrect2.gif","Incorrect3.gif","Incorrect4.gif","Incorrect5.gif","Incorrect6.gif","Incorrect7.gif","Incorrect8.gif"],
total:[],
gifs:[],
num: Math.floor(Math.random()*6),
corgifs: Math.floor(Math.random()*5),
ingifs: Math.floor(Math.random()*8),
numberCorrect:0,
numberIncorrect:0,
timeleft:10,
tryAgain: document.getElementById("tryAgain"),
question: document.getElementById("question"),
answers1: document.getElementById("answer1"),
answers2: document.getElementById("answer2"),
answers3: document.getElementById("answer3"),
answers4: document.getElementById("answer4"),
block: document.getElementById("block"),
answerBlock: document.getElementById("answers"),
top: document.getElementById("top1"),
modal: document.getElementById("myModal"),
btn: document.getElementById("startBtn"),
show: document.getElementById("show"),
revealCorrect: document.getElementById("revealCorrect"),
revealIncorrect: document.getElementById("revealIncorrect"),
pic: document.getElementById("pic"),
time: document.getElementById("time"),
outoftime: document.getElementById("notime"),
results: document.getElementById("results"),
end: document.getElementById("end"),
showa: document.getElementById("showanswer1"),
endGame: function(){
  trivia.top.style.display="none";
  trivia.answerBlock.style.display="none";
  trivia.results.style.display="block";
  trivia.end.style.display="block";
  document.getElementById("C").innerHTML+=trivia.numberCorrect;
  document.getElementById("I").innerHTML+=trivia.numberIncorrect;

  clearInterval(x);

},

play: function(){
  trivia.timeleft=15;
  trivia.top.style.display="block";
   trivia.answerBlock.style.display="block";
   trivia.revealCorrect.style.display="none";
   trivia.outoftime.style.display="none";
   trivia.revealIncorrect.style.display="none";
   trivia.show.style.display="none";
   trivia.end.style.display="none";
   trivia.results.style.display="none";

  if(trivia.total.length>10)
  {
      trivia.endGame();
  }
  else{
  trivia.num= Math.floor(Math.random()*10);
  
  while(trivia.total.indexOf(trivia.num)>=0){
      trivia.num= Math.floor(Math.random()*10);
  }

      clearInterval(x);
  x = setInterval(function() {
      trivia.timeleft--;
        
          document.getElementById("time").innerHTML = "Time left:"+trivia.timeleft;
          
          if (trivia.timeleft < 0) {
              clearInterval(x);
              trivia.outOfTime();
          }
      }, 1000);
  trivia.print(trivia.set[trivia.num]);
  trivia.total.push(trivia.num);
  }
},


outOfTime: function(){
trivia.outoftime.style.display="block";
trivia.top.style.display="none";
trivia.answerBlock.style.display="none";
//trivia.revealIncorrect.style.display="block";
trivia.show.style.display="block";
while(trivia.gifs.indexOf(trivia.ingifs)>=0){
  console.log("boo");

  trivia.ingifs= Math.floor(Math.random()*8);
}

document.getElementById("pic").src = trivia.incorrectgifs[trivia.ingifs];
trivia.gifs.push(trivia.ingifs);

// document.getElementById("pic").src = ;
document.getElementById("showanswer1").innerHTML = "The Correct Answer is: "+trivia.set[trivia.num].answers[trivia.set[trivia.num].correct];
trivia.numberIncorrect++;
setTimeout(trivia.play,2000);
},


print: function(a){
  trivia.time.innerHTML="Time left:"+trivia.timeleft;
  trivia.question.textContent=a.question1;
  trivia.answers1.textContent=a.answers[0];
  trivia.answers2.textContent=a.answers[1];
  trivia.answers3.textContent=a.answers[2];
  trivia.answers4.textContent=a.answers[3];
},


checkAnswer: function(number){
   trivia.top.style.display="none";
   trivia.answerBlock.style.display="none";
   trivia.show.style.display="block";
  trivia.timeleft=10;
if(trivia.set[trivia.num].correct==number){
  trivia.revealCorrect.style.display="block";
  trivia.show.style.display="block";

  while(trivia.gifs.indexOf(trivia.corgifs)>=0){
      console.log("yay");
      trivia.corgifs= Math.floor(Math.random()*10);
  }
  trivia.gifs.push(trivia.corgifs);

  document.getElementById("pic").src = trivia.correctgifs[trivia.corgifs];


  document.getElementById("showanswer1").innerHTML = "The Correct Answer is: "+trivia.set[trivia.num].answers[trivia.set[trivia.num].correct];
  trivia.numberCorrect++;
 setTimeout(trivia.play,3000);
  
}
else{
  trivia.revealIncorrect.style.display="block";
  trivia.show.style.display="block";
  while(trivia.gifs.indexOf(trivia.ingifs)>=0){
      console.log("boo");

      trivia.ingifs= Math.floor(Math.random()*8);
  }

  document.getElementById("pic").src = trivia.incorrectgifs[trivia.ingifs];
  trivia.gifs.push(trivia.ingifs);

// document.getElementById("pic").src = ;
document.getElementById("showanswer1").innerHTML = "The Correct Answer is: "+trivia.set[trivia.num].answers[trivia.set[trivia.num].correct];

trivia.numberIncorrect++;

  setTimeout(trivia.play,3000);


}

},



  
};

trivia.btn.addEventListener("click", function() {
  trivia.modal.style.display = "none";
  trivia.play();
  

});

trivia.answers1.addEventListener("click", function() {
  trivia.timeleft=0;

  trivia.checkAnswer(0);
});

trivia.answers2.addEventListener("click", function() {
  trivia.timeleft=0;

  trivia.checkAnswer(1);

});

trivia.answers3.addEventListener("click", function() {
  trivia.timeleft=0;

  trivia.checkAnswer(2);

});

trivia.answers4.addEventListener("click", function() {
  trivia.timeleft=0;

  trivia.checkAnswer(3);
});
trivia.tryAgain.addEventListener("click", function(){
  document.location.reload();

})