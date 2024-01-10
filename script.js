//Data
const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<scripting>", "<script>", "<js>"],
        correctAnswer: 2
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msgBox('Hello World')", "alert('Hello World')", "msg('Hello World')", "alertBox('Hello World')"],
        correctAnswer: 1
    },

    {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function:myFunction()", "function= new myFunction()", "function myFunction()"],
        correctAnswer: 3
    },

    {
        question: "How do you call a function named 'myFunction'?",
        options: ["myFunction()", "call fucntion myFunction()", "call myFunction()", "funtion call myFunction"],
        correctAnswer: 0
    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if(i == 5)", "if i = 5", "if i = 5 then", "if i == 5 then"],
        correctAnswer: 0
    },

    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: ["if i != 5 then", "if(i <> 5)", "if(i not 5)", "if(i != 5)"],
        correctAnswer: 3
    },

    {
        question: "How to start a For loop?",
        options: ["for i = 1 to 5", "for(i = 0; i <=5; i++)", "for(i <=5; i++)", "for(i = 0; i <=5)"],
        correctAnswer: 1
    },

    {
        question: "How can you add a comment in a JavaScript?",
        options: ["'This is a comment'", "//This is a comment", "<!--This is a comment-->", "#This is a comment"],
        correctAnswer: 1
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = (1:'red', 2:'green',3:'blue')", "var colors= 'red', 'green', 'blue'", "var colors= 1 =('red'), 2 =('green'), 3 =('blue')", "var colors = ['red', 'green', 'blue']"],
        correctAnswer: 3
    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)", "round(7.25)"],
        correctAnswer: 2
    },
]

var body = document.body;

//Create Header
var header = document.createElement("header")
header.id = "header"
body.appendChild(header)
var highScores = document.createElement("h1")
highScores.textContent = "View Highscores"
header.appendChild(highScores)
var timerEl = document.createElement("h1")
header.appendChild(timerEl)

//Create Main Container
var quizContainer = document.createElement("div")
quizContainer.id = "quiz-container"
body.appendChild(quizContainer)

// Create Tittle
var title = document.createElement("h2")
title.textContent = "CODING QUIZ CHALLENGE";
quizContainer.appendChild(title)

// Create Description
var description = document.createElement("p")
description.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten (10) seconds"
quizContainer.appendChild(description)

//Create Start Button and handle events
var startQuizBtn = document.createElement("button")
startQuizBtn.textContent = "Start Quiz"
quizContainer.appendChild(startQuizBtn)
startQuizBtn.addEventListener("click", function () {
    title.style.display = "none"
    description.style.display = "none"
    startQuizBtn.style.display = "none"
    loadQuestion()
    setTimer()
})

var currentQuestionIndex = 0;
function loadQuestion() {
    // Check if there are still questions remaining and if the timer is not 0
    if (currentQuestionIndex < quizData.length && secondsLeft > 0) {
        var currentQuestion = quizData[currentQuestionIndex];

        // Display the question
        var question = document.createElement("div");
        question.textContent = currentQuestion.question;
        quizContainer.appendChild(question);

        // Display options
        for (var i = 0; i < currentQuestion.options.length; i++) {
            var option = document.createElement("button");
            option.textContent = currentQuestion.options[i];
            option.addEventListener("click", function (event) {
                handleAnswerClick(event.target.textContent, currentQuestion.correctAnswer);
            });
            quizContainer.appendChild(option);
        }
    } else {
        if (secondsLeft <= 0) {
            // Timer has reached 0, execute inputInitials
            inputInitials();
        } else {
            // No more questions, execute inputInitials
            inputInitials();
        }
    }
}



var score = 0;
function handleAnswerClick(selectedAnswer, correctAnswerIndex) {
    var answerText = document.createElement("h3");

    // Check if the selected answer is correct
    if (selectedAnswer === quizData[currentQuestionIndex].options[correctAnswerIndex]) {
        score++;
        answerText.textContent = "Correct";
    } else {
        secondsLeft -= 10;
        answerText.textContent = "Wrong";
        quizContainer.appendChild(answerText);

        // Delay before clearing the quiz container and loading the next question
        setTimeout(function () {
            currentQuestionIndex++;
            quizContainer.innerHTML = "";
            loadQuestion();
        }, 1000); 
        return;
    }

    // Display the answer text
    quizContainer.appendChild(answerText);

    // Delay before clearing the quiz container and loading the next question
    setTimeout(function () {
        // Move to the next question
        currentQuestionIndex++;
        quizContainer.innerHTML = "";
        loadQuestion();
        

    }, 1000); 
}



var secondsLeft = 50
function setTimer() {
    //Set interval
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time " + secondsLeft

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
        }
    }, 1000)
}

function inputInitials() {
    // create a form 
    var formEl = document.createElement("form")
    quizContainer.appendChild(formEl)

    var initialsInput = document.createElement("input")
    initialsInput.type = "text"
    initialsInput.placeholder = "Type your initials"
    formEl.appendChild(initialsInput)

    // submit button
    var submitBtn = document.createElement("button")
    submitBtn.textContent = "Submit"
    formEl.appendChild(submitBtn)

    // add submit button click event listener
    submitBtn.addEventListener("click", function () {
        var initials = initialsInput.value;
        showScores(initials);
    });


}

function showScores(initials) {
    // clear the quiz container
    quizContainer.innerHTML = "";

    // display the total score
    var totalScore = document.createElement("h2");
    totalScore.textContent = "Total Score: " + score;
    quizContainer.appendChild(totalScore);

    // display the initials
    var initialsDisplay = document.createElement("p");
    initialsDisplay.textContent = "Your Initials: " + initials;
    quizContainer.appendChild(initialsDisplay);

    // store data in localStorage
    var highScoresData = JSON.parse(localStorage.getItem("highScores")) || [];
    highScoresData.push({ initials: initials, score: score });
    localStorage.setItem("highScores", JSON.stringify(highScoresData));

    displayHighScores();
}


// Retrieve high scores from localStorage
function getHighScores() {
    var highScoresData = JSON.parse(localStorage.getItem("highScores")) || [];
    return highScoresData;
}

// Function to display high scores
function displayHighScores() {
    // clear the quiz container
    quizContainer.innerHTML = "";

    // Display the high scores
    var highScoresData = getHighScores();

    var highScoresTitle = document.createElement("h2");
    highScoresTitle.textContent = "High Scores";
    quizContainer.appendChild(highScoresTitle);

    if (highScoresData.length > 0) {
        // Create an ordered list to display high scores
        var highScoresList = document.createElement("ol");

        // Iterate through high scores and create list items
        highScoresData.forEach(function (item) {
            var scoreItem = document.createElement("li");
            scoreItem.textContent = item.initials + " - " + item.score;
            highScoresList.appendChild(scoreItem);
        });

        quizContainer.appendChild(highScoresList);
    } else {
        var noScoresMessage = document.createElement("p");
        noScoresMessage.textContent = "No high scores available yet.";
        quizContainer.appendChild(noScoresMessage);
    }
}


