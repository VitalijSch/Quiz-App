function renderHtmlTemplate(quiz) {
    return /* html */ `
        <h2 class="mb-30">${quiz.question}</h2>
        <div class="quiz-answer-container">
            <button id="a" onclick="chooseAnswer('a')" class="quiz-answer-align">
                <div class="answer-category a"><b>A</b></div>
                <span>${quiz.answer.a}</span>
            </button>
            <button id="b" onclick="chooseAnswer('b')" class="quiz-answer-align">
                <div class="answer-category b"><b>B</b></div>
                <span>${quiz.answer.b}</span>
            </button>
            <button id="c" onclick="chooseAnswer('c')" class="quiz-answer-align">
                <div class="answer-category c"><b>C</b></div>
                <span>${quiz.answer.c}</span>
            </button>
            <button id="d" onclick="chooseAnswer('d')" class="quiz-answer-align">
                <div class="answer-category d"><b>D</b></div>
                <span>${quiz.answer.d}</span>
            </button>
        </div>
    `;
}


function resultHtmlTemplate(quiz, points) {
    return /* html */ `
        <div class="result-container">
            <img class="result-img" src="./img/brain_result.png" alt="brain png">
            <h2><b>COMPLETE<br>HTML QUIZ</b></h2>
            <div class="score-container">
                <span>YOUR SCORE</span>
                <span>${points}/${quiz.length}</span>
            </div>
            <div class="result-button-container">
                <button class="btn btn-primary">SHARE</button>
                <button onclick="resetQuiz()">REPLAY</button>
            </div>
            <img class="tropy" src="./img/tropy.png" alt="tropy">
        </div>
    `;
}