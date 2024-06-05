const questionDataBase = [
    {
        question: "A batsman scored 110 runs which included 3 boundaries(1 boundary = 4 runs) and 8 sixes (1 six = 6 runs). What percent of his total score did he make by running between the wickets?",
        option1: "45%",
        option2: "45 5/11%",
        option3: "54 6/11",
        option4: "55%",
        ans: "answer4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        option1: "Earth",
        option2: "Mars",
        option3: "Jupiter",
        option4: "Venus",
        ans: "answer2"
    },
    {
        question: "What is the capital of France?",
        option1: "Berlin",
        option2: "Madrid",
        option3: "Paris",
        option4: "Lisbon",
        ans: "answer3"
    },
    {
        question: "Who wrote 'Hamlet'?",
        option1: "Charles Dickens",
        option2: "J.K. Rowling",
        option3: "William Shakespeare",
        option4: "Jane Austen",
        ans: "answer3"
    },
    {
        question: "Which element does 'O' represent on the periodic table?",
        option1: "Osmium",
        option2: "Oxygen",
        option3: "Oganesson",
        option4: "Oxium",
        ans: "answer2"
    },
    {
        question: "What is the largest ocean on Earth?",
        option1: "Atlantic Ocean",
        option2: "Indian Ocean",
        option3: "Arctic Ocean",
        option4: "Pacific Ocean",
        ans: "answer4"
    },
    {
        question: "Which country is the largest by area?",
        option1: "China",
        option2: "Canada",
        option3: "Russia",
        option4: "United States",
        ans: "answer3"
    },
    {
        question: "What is the smallest unit of life?",
        option1: "Atom",
        option2: "Molecule",
        option3: "Cell",
        option4: "Organ",
        ans: "answer3"
    },
    {
        question: "What is the boiling point of water?",
        option1: "90°C",
        option2: "100°C",
        option3: "110°C",
        option4: "120°C",
        ans: "answer2"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        option1: "Albert Einstein",
        option2: "Charles Babbage",
        option3: "Isaac Newton",
        option4: "Alan Turing",
        ans: "answer2"
    }
];

let questionCount = 0;
let score = 0;

const questionContainer = document.querySelector("#questionText");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector(".btn[type='submit']");
const usersAnswer = document.querySelectorAll(".answer");
const scoreArea = document.querySelector("#ShowScore");
const questionPalette = document.querySelector(".question-palette");

const mainFunc = () => {
    const list = questionDataBase[questionCount];
    questionContainer.innerText = list.question;
    option1.innerText = list.option1;
    option2.innerText = list.option2;
    option3.innerText = list.option3;
    option4.innerText = list.option4;
    updatePalette();
};

const goCheckAnswer = () => {
    let answers;
    usersAnswer.forEach((data) => {
        if (data.checked) {
            answers = data.id;
        }
    });
    return answers;
};

const deselectAll = () => {
    usersAnswer.forEach((data) => {
        data.checked = false;
    });
};

const updatePalette = () => {
    questionPalette.innerHTML = '';
    questionDataBase.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.classList.add('not-visited');
        btn.innerText = index + 1;
        btn.onclick = () => navigateToQuestion(index);
        questionPalette.appendChild(btn);
    });
    const currentButton = document.querySelectorAll('.question-palette button')[questionCount];
    currentButton.classList.remove('not-visited');
    if (goCheckAnswer()) {
        currentButton.classList.add('answered');
    }
};

const navigateToQuestion = (index) => {
    questionCount = index;
    mainFunc();
};

const markForReview = () => {
    const currentButton = document.querySelectorAll('.question-palette button')[questionCount];
    currentButton.classList.add('marked');
};

const clearResponse = () => {
    deselectAll();
};

const submitQuiz = () => {
    const checkAnswer = goCheckAnswer();
    if (checkAnswer === questionDataBase[questionCount].ans) {
        score++;
    }
    scoreArea.style.display = "block";
    scoreArea.innerHTML = `
        <h3>Your score is ${score} / ${questionDataBase.length}</h3>
        <button class='btn' onclick='location.reload()'>Play Again</button>
    `;
    document.querySelector("#SubmitButton").style.display = "none";
    document.querySelector(".palette-section").style.display = "none";
};

submitButton.addEventListener("click", () => {
    const checkAnswer = goCheckAnswer();
    if (checkAnswer === questionDataBase[questionCount].ans) {
        score++;
    }
    questionCount++;
    deselectAll();
    if (questionCount < questionDataBase.length) {
        mainFunc();
    } else {
        submitQuiz();
    }
});

updatePalette();
mainFunc();
