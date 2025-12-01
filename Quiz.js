let questions = [];
let currentQuestion = null;
let score = 0;

async function loadQuestions() {
    const url = " https://raw.githubusercontent.com/kubilu2334/Quiz-/refs/heads/main/Quiz.json.";

    const res = await fetch(url);
    questions = await res.json();
    nextQuestion();
}

function nextQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];

    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("userAnswer").value = "";
    document.getElementById("feedback").innerHTML = "";
}

function checkAnswer() {
    const userInput = document.getElementById("userAnswer").value.toLowerCase();
    const keywords = currentQuestion.keywords.map(word => word.toLowerCase());

    let correct = keywords.some(kw => userInput.includes(kw));

    if (correct) {
        score++;
        document.getElementById("feedback").innerHTML = "Correct!";
    } else {
        document.getElementById("feedback").innerHTML =
            `Wrong. Correct answer: ${currentQuestion.answer}`;
    }

    document.getElementById("score").innerHTML = "Score: " + score;
}

loadQuestions();
