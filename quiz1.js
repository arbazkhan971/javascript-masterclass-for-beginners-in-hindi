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

const question = document.getElementById('question-text');
console.log(question.textContent);
const text_a = document.getElementById('text_a');
const text_b = document.getElementById('text_b');
const text_c = document.getElementById('text_c');
const text_d = document.getElementById('text_d');
const submitButton = document.getElementById('submit');
const answerElements = document.querySelectorAll('.answer');

let current_question = 0;
let score = 0;

question.textContent = quiz[0].question;
text_a.textContent = quiz[0].ans1text;
text_b.textContent = quiz[0].ans2text;
text_c.textContent = quiz[0].ans3text;
text_d.textContent = quiz[0].ans4text;

submitButton.addEventListener('click', () => {
    console.log("clicked");
    const answerchecked = document.querySelector('input[type=radio]:checked');
    console.log(answerchecked);
    // find whether the answer is selected or not
    if( answerchecked === null ){
        alert('Please select an answer');
    }else{
        const answer = quiz[current_question].answer;
        const label = answerchecked.nextElementSibling.textContent;
        if( label === answer){
            score++;
        }
        current_question++;
        if( current_question < quiz.length ){
            question.textContent = quiz[current_question].question;
            text_a.textContent = quiz[current_question].ans1text;
            text_b.textContent = quiz[current_question].ans2text;
            text_c.textContent = quiz[current_question].ans3text;
            text_d.textContent = quiz[current_question].ans4text;
            answerchecked.checked = false;
        }else{
            alert(`Your score is ${score} out of ${quiz.length}`);
        }


    }

});

