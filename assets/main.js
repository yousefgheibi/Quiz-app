const quizData = [
    {
        question: 'Which country produces the most coffee in the world?',
        a: 'Columbia',
        b: 'Indonesia',
        c: 'Ethiopia',
        d: 'Brazil',
        correct: 'd',
    },
    {
        question: 'What is Chandler’s last name in the sitcom Friends?',
        a: 'Geller',
        b: 'Smith',
        c: 'Bing',
        d: 'Johnson',
        correct: 'c',
    },
    {
        question: "What's the most expensive home in the world?",
        a: 'Buckingham Palace - UK',
        b: 'Antilla - India',
        c: 'Villa Les Cédres - France',
        d: 'Four Fairfield Pond -USA',
        correct: 'a',
    },
    {
        question: 'How many rides are there at Disney World?',
        a: '50',
        b: '42',
        c: '46',
        d: '49',
        correct: 'b',
    },
    {
        question: 'What was Beyoncé’s first solo album?',
        a: 'Drunk In Love',
        b: 'Dangerously In Love',
        c: 'Lemonade',
        d: 'Deja Vu',
        correct: 'b',
    },
];

const quiz = document.getElementById('quiz'),
    answerEls = document.querySelectorAll('.answer'),
    questionEl = document.getElementById('question'),
    a_text = document.getElementById('a_text'),
    b_text = document.getElementById('b_text'),
    c_text = document.getElementById('c_text'),
    d_text = document.getElementById('d_text'),
    submitBtn = document.getElementById('submit');

let currentQuiz = 0,
    score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
      `;
        }
    }
});
