$("#startTrivia").on('click',function(){
  $("#startTrivia").remove();
  $('#directions').remove();
  game.loadQuestion();
})

$(document).on('click', '.anwser-button', function(e){
  game.clicked(e);
})

$(document).on('click', '#reset', function(){
  game.reset();
})

var questions = [{

        question: "What is the primary food source for coral reefs?",
        answers: ["Plankton", "Sunlight", "Human Souls", "Small Fish"],
        correctAnswer: "Plankton",
      },
      {
          question: "Plankton largely reside in what part of the ocean?",
          answers: ["Twighlight Zone", "Sunlight Zone", "Thermocline Zone", "Pelagic Zone"],    
          correctAnswer: "Thermocline Zone",
  
        },
        {
          question: "The Bering Strait lies between which two continents?",
          answers: ["Asia & Africa", "North America & Asia", "Europe & Africa", "North America & South America"],    
          correctAnswer: "North America & Asia",
  
        },
        {
          question: "What is the largest fish in the world?",
          answers: ["Hagfish", "Blue Whale", "Dolphin", "Whale Shark"],    
          correctAnswer: "Whale Shark",
  
        },
         {
          question: "How many different ways can a marine worm species reproduce?",
          answers: ["None", "1", "18", "5"],    
          correctAnswer: "18",
  
        },
         {
          question: "What is considered Deep Sea?",
          answers: ["100ft","350ft","650ft", "1000ft"],    
          correctAnswer: "650ft",
          
        },
        {
          question: "Which of these is considered the deepest dwelling fish?",
          answers: ["clownfish","Snailfish","tuna","sturgeon"],    
          correctAnswer: "Snailfish",
          
        },
        {
          question: "How much of breathable oxygen is produced by the ocean?",
          answers: ["10%","30%","50%","70%"],    
          correctAnswer: "70%",
          
        },
        {
          question: "About how much of the worlds oceans have been explored?",
          answers: ["5%","10%","30%","85%"],    
          correctAnswer: "5%",
          
        },
        {
          question: "About how fast can bluefin tuna swim?",
          answers: ["11mph","28mph","32mph","43mph"],    
          correctAnswer: "43mph",
      }]

  var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    
    countdown: function(){
      game.counter--;
      $('#counter').html(game.counter)
      if(game.counter<=0) {
        console.log("time up!")
        game.timeUp();
      }
    },
    loadQuestion: function() {
      timer = setInterval(game.countdown,3000);
      $("#subwrapper").html("<h2 id='counter'>10</h2>")
      $("#subwrapper").append('<h2>' +questions[game.currentQuestion].question+ '</h2>')
      for (var i=0;i<questions[game.currentQuestion].answers.length; i++) {
        $("#subwrapper").append('<button class="anwser-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>')
      }

    },
    nextQuestion: function() {
      game.counter = 30;
      $("#counter").html(game.counter);
      game.currentQuestion++;
      game.loadQuestion();
    },
    timeUp: function() {
      game.incorrect++
      clearInterval(timer)
      $("#subwrapper").html("<h2> Ran out of time! Sucks!</h2>")
      $("#subwrapper").append("<h3> The correct anwser is: " + questions[game.currentQuestion].correctAnswer + "</h3>" )
      if (game.currentQuestion==questions.length-1){
        setTimeout(game.results,1*3000)
      } else {
        setTimeout(game.nextQuestion,1*3000)
      } 
    },
    results: function(){
      clearInterval(timer);
      $("#subwrapper").html("You've completed this task")
      $("#subwrapper").append("<h3> Right Awnsers: " + game.correct + "</h3>")
      $("#subwrapper").append("<h3> Wrong Awnsers: " + game.incorrect + "</h3>")
      $("#subwrapper").append("<button id='reset'>Play Again?</button")
    },
    clicked: function(e) {
      clearInterval(timer);
      if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
        game.anwseredCorrectly();
      } else {
        game.anwseredIncorrectly();
      }
    },
    anwseredCorrectly: function() {
      console.log("Right!")
      clearInterval(timer);
      game.correct++
      $("#subwrapper").html("<h2> That's right. You think you know your stuff, huh?</h2>")
      if (game.currentQuestion==questions.length-1){
        setTimeout(game.results,1*3000)
      } else {
        setTimeout(game.nextQuestion,1*3000)
      }

    },
    anwseredIncorrectly: function() {
      console.log("Wrong!")
      clearInterval(timer);
      game.incorrect++
      $("#subwrapper").html("<h2>WRONG!</h2>")
      $("#subwrapper").append("<h3> The correct anwser is: " + questions[game.currentQuestion].correctAnswer + "</h3>" )
      if (game.currentQuestion==questions.length-1){
        setTimeout(game.results,1*3000)
      } else {
        setTimeout(game.nextQuestion,1*3000)
      }
    },
    reset: function() {
      console.log("I was clicked")
      game.currentQuestion = 0;
      game.counter = 30;
      game.correct= 0;
      game.incorrect =0;
      game.loadQuestion()
    }
  }
