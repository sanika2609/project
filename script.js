const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultDisplay = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    quiz.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    
    return null;
}

function submitQuiz() {
    const answer = getSelectedAnswer();
    
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
        
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    resultDisplay.innerHTML = `<h2>You scored ${score} out of ${quizData.length}!</h2>`;
}

submitButton.addEventListener('click', submitQuiz);
loadQuestion();