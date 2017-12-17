$('#start').on('click', function(){
    $('#start').remove();
    game.loadQuestion();
})

$(document).on('click', '.answer-button', function(e){
    game.clicked(e);
})
$(document).on('click','#reset', function(){
    game.reset();
})
var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters INC", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story",
    image: "assets/images/toystory.gif"
}, {
    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice",
    image:"assets/images/spicegirls.gif"
}, {
    question: "Which NBA team won the most titles in the 90s?",
    answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: "Chicago Bulls",
    image:"assets/images/bulls.gif"
}, {
    question: 'Which group released the hit song, "Smells like Teen Spirit"?',
    answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
    correctAnswer: "Nirvana",
    image: "assets/images/nirvana.gif"
}, {
    question: 'Which popular Disney movie featured the song, "Circle of Life"?',
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King",
    image: "assets/images/lionking.gif"
}, {
    question: 'Finish this line from the Fresh Prince of Bel-Air theme song: "I whistled for a cab and when it came near, the license plate said..."',
    answers: ["Dice", "Mirror", "Fresh", "Cab"],
    correctAnswer: "Fresh",
    image: "assets/images/fresh.gif"
}, {
    question: "What was Doug's Best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter",
    image: "assets/images/skeeter.gif"
}, {
    question: "What was the name of the principal at Bayside High in Saved by the Bell?",
    answers: ["Mr. Zhou", "Mr. Driggers", "Mr. Belding", "Mr. Page"],
    correctAnswer: "Mr. Belding",
    image: "assets/images/belding.gif"
}];

var game = {
    questions:questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    unanswered:0,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("TIME UP!");
            game.timeUP();
        }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html("<h2>TIME REMAINING <span id='counter'>30</span> Seconds</h2>");
        $('#subwrapper').append('<h2>'+questions[game.currentQuestion].question+'</h2>');
        for(var i=0 ; i<questions[game.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class = "answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        };
    },
    nextQuestion: function(){
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2>OUT OF TIME!</h2>');
        $('#subwrapper').append('<h3>The correct Answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    }, 
    results: function(){
        clearInterval(timer);
        $('#subwrapper').html("<h2>ALL DONE!</h2>");
        $('#subwrapper').append("<h3>Correct: "+game.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect: "+game.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+game.unanswered+"</h3>");
        $('#subwrapper').append("<button id='reset'>RESET</button>");
    },
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        } else{
            game.answeredIncorrectly();
        }
        
    },
    answeredCorrectly: function(){
        console.log("YOU GOT IT!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2>YOU GOT IT RIGHT!</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    answeredIncorrectly: function(){
        console.log("WRONG!");
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2>YOU GOT IT WRONG!</h2>');
        $('#subwrapper').append('<h3>The correct Answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }


};