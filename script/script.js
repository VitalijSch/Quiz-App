let chooseQuiz = 0;
let question = 0;
let points = 0;
let wrong = new Audio('./sounds/wrong.mp3');
let right = new Audio('./sounds/right.mp3');


function startPage(category) {
    const startContainer = document.getElementById('startContainer');
    startContainer.innerHTML = startHtmlTemplate(category);
}


function startQuiz() {
    const questionContainer = document.getElementById('questionContainer');
    const startContainer = document.getElementById('startContainer');
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.style = '';
    questionContainer.style.display = 'flex';
    startContainer.style.display = 'none';
    const quiz = quizData[chooseQuiz].quiz[question];
    questionContainer.innerHTML = renderHtmlTemplate(quiz);
}


function chooseAnswer(answer) {
    const rightAnswer = quizData[chooseQuiz].quiz[question].rightAnswer;
    const rightArrow = document.querySelector('.right-arrow');
    const quizAnswerAlign = document.querySelectorAll('.quiz-answer-align');
    rightArrow.disabled = false;
    quizAnswerAlign.forEach(answer => {
        answer.disabled = true;
    });
    if (answer === rightAnswer) {
        document.getElementById(answer).classList.add('right-answer-container');
        document.querySelector(`.${answer}`).classList.add('right-answer');
        points++;
        right.play();
    } else {
        document.getElementById(answer).classList.add('wrong-answer-container');
        document.querySelector(`.${answer}`).classList.add('wrong-answer');
        document.getElementById(rightAnswer).classList.add('right-answer-container');
        document.querySelector(`.${rightAnswer}`).classList.add('right-answer');
        wrong.play();
    }
}


function backByOne() {
    const questionContainer = document.getElementById('questionContainer');
    const startContainer = document.getElementById('startContainer');
    const rightArrow = document.querySelector('.right-arrow');
    const buttonContainer = document.querySelector('.button-container');
    const quizAnswerAlign = document.querySelectorAll('.quiz-answer-align');
    rightArrow.disabled = true;
    quizAnswerAlign.forEach(answer => {
        answer.disabled = true;
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
    const rightArrow = document.querySelector('.right-arrow');
    const quizAnswerAlign = document.querySelectorAll('.quiz-answer-align');
    rightArrow.disabled = true;
    quizAnswerAlign.forEach(answer => {
        answer.disabled = false;
    });
    if (question >= quizData[chooseQuiz].quiz.length - 1) {
        showResult();
    } else {
        question++;
        startQuiz();
    }
}


function showResult() {
    let category = '';
    const questionContainer = document.getElementById('questionContainer');
    const buttonContainer = document.querySelector('.button-container');
    const quiz = quizData[chooseQuiz].quiz;
    if (chooseQuiz === 0) {
        category = 'HTML';
    } else if(chooseQuiz === 1) {
        category = 'CSS';
    } else if(chooseQuiz === 2) {
        category = 'JS';
    } else {
        category = 'JAVA';
    }
    buttonContainer.style.display = 'none';
    questionContainer.innerHTML = resultHtmlTemplate(quiz, points, category);
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


function changeQuiz(quiz, event, category) {
    const questionContainer = document.getElementById('questionContainer');
    const startContainer = document.getElementById('startContainer');
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.style.display = 'none';
    questionContainer.style.display = 'none';
    startContainer.style.display = 'flex';
    document.querySelectorAll('.category').forEach(text => {
        text.classList.remove('active-category');
    });
    let clickedElement = event.currentTarget;
    clickedElement.classList.add('active-category');
    chooseQuiz = quiz;
    startPage(category);
}