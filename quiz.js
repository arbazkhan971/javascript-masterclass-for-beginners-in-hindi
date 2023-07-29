const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

const questionElement = document.getElementById('quiz-h2');
const answerElements = document.querySelectorAll('.answer');
const ans1textElement = document.getElementById('ans-1-text');
const ans2textElement = document.getElementById('ans-2-text');
const ans3textElement = document.getElementById('ans-3-text');
const ans4textElement = document.getElementById('ans-4-text');
const submitButton = document.querySelector('#submit');

let current_question = 0;
let score = 0;

ShowQuiz();

function ShowQuiz() {
  deselectAnswers();
  let question = quiz[current_question].question;
  let ans1text = quiz[current_question].ans1text;
  let ans2text = quiz[current_question].ans2text;
  let ans3text = quiz[current_question].ans3text;
  let ans4text = quiz[current_question].ans4text;
  questionElement.textContent = question;
  ans1textElement.textContent = ans1text;
  ans2textElement.textContent = ans2text;
  ans3textElement.textContent = ans3text;
  ans4textElement.textContent = ans4text;
}

function deselectAnswers() {
  answerElements.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitButton.addEventListener('click', () => {
  const selectedAnswer = document.querySelector('.answer:checked');
  
  if (!selectedAnswer) {
    alert('Please select an answer');
  } else {
    const selectedAnswerText = selectedAnswer.nextElementSibling.textContent;
    const correctAnswer = quiz[current_question].answer;
    
    if (selectedAnswerText === correctAnswer) {
      score++;
    }
    
    current_question++;
    
    if (current_question >= quiz.length) {
      alert(`You got ${score} out of ${quiz.length} correct!`);
      submitButton.disabled = true;
      submitButton.textContent = 'Quiz Completed';

    } else {
      ShowQuiz();
    }
  }
});