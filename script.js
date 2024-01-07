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

var currentQuestion = 0;

function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    loadQuestion();
}

