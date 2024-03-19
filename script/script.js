let chooseQuiz = 0;
let question = 0;
let points = 0;


function startQuiz() {
    const questionContainer = document.getElementById('questionContainer');
    const startContainer = document.getElementById('startContainer');
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.style = '';
    questionContainer.style.display = 'flex';
    startContainer.style.display = 'none';
    const quiz = quizData[chooseQuiz].html[question];
    questionContainer.innerHTML = renderHtmlTemplate(quiz);
}


function chooseAnswer(answer) {
    const rightAnswer = quizData[chooseQuiz].html[question].rightAnswer;
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const quizAnswerAlign = document.querySelectorAll('.quiz-answer-align');
    leftArrow.disabled = false;
    rightArrow.disabled = false;
    quizAnswerAlign.forEach(answer => {
        answer.disabled = true;
    });
    if (answer === rightAnswer) {
        document.getElementById(answer).classList.add('right-answer-container');
        document.querySelector(`.${answer}`).classList.add('right-answer');
        points++;
    } else {
        document.getElementById(answer).classList.add('wrong-answer-container');
        document.querySelector(`.${answer}`).classList.add('wrong-answer');
        document.getElementById(rightAnswer).classList.add('right-answer-container');
        document.querySelector(`.${rightAnswer}`).classList.add('right-answer');
    }
}


function backByOne() {
    const questionContainer = document.getElementById('questionContainer');
    const startContainer = document.getElementById('startContainer');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const buttonContainer = document.querySelector('.button-container');
    const quizAnswerAlign = document.querySelectorAll('.quiz-answer-align');
    leftArrow.disabled = true;
    rightArrow.disabled = true;
    quizAnswerAlign.forEach(answer => {
        answer.disabled = false;
    });
    if (question === 0) {
        buttonContainer.style.display = 'none';
        questionContainer.style.display = 'none';
        startContainer.style.display = 'flex';
    } else {
        question--;
        startQuiz();
    }
}


function forwardByOne() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const quizAnswerAlign = document.querySelectorAll('.quiz-answer-align');
    leftArrow.disabled = true;
    rightArrow.disabled = true;
    quizAnswerAlign.forEach(answer => {
        answer.disabled = false;
    });
    if (question >= quizData[chooseQuiz].html.length - 1) {
        showResult();
    } else {
        question++;
        startQuiz();
    }
}


function showResult() {
    const questionContainer = document.getElementById('questionContainer');
    const buttonContainer = document.querySelector('.button-container');
    const quiz = quizData[chooseQuiz].html;
    buttonContainer.style.display = 'none';
    questionContainer.innerHTML = resultHtmlTemplate(quiz, points);
}


function resetQuiz() {
    const questionContainer = document.getElementById('questionContainer');
    const startContainer = document.getElementById('startContainer');
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.style.display = 'none';
    questionContainer.style.display = 'none';
    startContainer.style.display = 'flex';
    chooseQuiz = 0;
    question = 0;
    points = 0;
}