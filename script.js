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
    {
        question: "What is the capital of Germany?",
        a: "Berlin",
        b: "Munich",
        c: "Frankfurt",
        d: "Hamburg",
        correct: "a"
    },
    {
        question: "Which planet is closest to the Sun?",
        a: "Venus",
        b: "Earth",
        c: "Mercury",
        d: "Mars",
        correct: "c"
    },
    {
        question: "What ocean lies between Africa and Australia?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Pacific Ocean",
        d: "Arctic Ocean",
        correct: "b"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "Japan",
        c: "Thailand",
        d: "South Korea",
        correct: "b"
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Nauru",
        correct: "b"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        correct: "b"
    },
    {
       question :  'What is the hardest natural substance on Earth?',
       a : 'Gold',
       b : 'Diamond',
       c : 'Iron',
       d : 'Quartz',
       correct : 'b'
   },
   {
       question : 'Who wrote \"Romeo and Juliet\"?',
       a : 'Charles Dickens',
       b : 'Mark Twain',
       c : 'William Shakespeare',
       d : 'Jane Austen',
       correct : 'c'
   },
   {
      question :  'What is the largest mammal in the world?',
      a :  'Elephant',
      b :  'Blue Whale',
      c :  'Giraffe',
      d :  'Great White Shark',
      correct :'b'
   },
   {
       question : 'Which element has the chemical symbol O?',
       a : 'Gold',
       b : 'Oxygen',
       c : 'Silver',
       d : 'Iron',
       correct : 'b'
   },
   {
       question : 'In what year did World War II end?',
       a : '1945',
       b : '1939',
       c : '1950',
       d : '1940',
       correct : 'a'
   },
   {
       question : 'What is the main ingredient in guacamole?',
       a : 'Tomato',
       b : 'Avocado',
       c : 'Pepper',
       d : 'Onion',
       correct : 'b'
   },
   {
       question : 'Which planet has rings around it?',
       a : 'Earth',
       b : 'Mars',
       c : 'Saturn',
       d : 'Neptune',
       correct : 'c'
   },
   {
       question : 'What is H2O more commonly known as?',
       a : 'Hydrogen Peroxide',
       b : 'Salt Water',
       c : 'Water',
       d : 'Alcohol',
       correct : 'c'
   },
   {
      question :  'Which continent is known as the Dark Continent?',
      a :  'Asia',
      b :  'Africa',
      c :  'Australia',
      d :  'South America',
      correct :'b'
   },
   {
      question :  'Who painted the Mona Lisa?',
      a :  'Vincent Van Gogh',
      b :  'Pablo Picasso',
      c :  'Leonardo da Vinci',
      d :  'Claude Monet',
      correct :'c'
   },
   // New Question Added
   {
      question: "What is the currency of Japan?",
      a: "Yen",
      b: "Won",
      c: "Dollar",
      d: "Euro",
      correct: "a"
   }
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
    let resultHTML = `<h2>You scored ${score} out of ${quizData.length}!</h2>`;
    
    resultHTML += "<h3>Correct Answers:</h3>";
    
    quizData.forEach((question, index) => {
         resultHTML += `<p>Q${index + 1}: ${question.question} <br> Correct Answer: ${question[question.correct]}</p>`;
     });
    
     resultDisplay.innerHTML = resultHTML;
}

submitButton.addEventListener('click', submitQuiz);
loadQuestion();
