$('#start').on('click', function(){
    $('#start').remove();
});

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