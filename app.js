let quizData = [
  {
    question: "What is capital of pakistan?",
    a: "Islamabad",
    b: "Lahore",
    c: "Rawalpindi",
    d: "Multan",
    answer: "a",
  },
  {
    question: "Who is the current Prime Minister 2021?",
    a: "Nawaz Sharif",
    b: "Shahid Khakan Abassi",
    c: "Imran Khan",
    d: "Pervaiz kiyani",
    answer: "c",
  },
  {
    question: "What is the color of Sky?",
    a: "Blue",
    b: "White",
    c: "Black",
    d: "none of above",
    answer: "c",
  },
  {
    question: "What is my age?",
    a: "24",
    b: "25",
    c: "26",
    d: "23",
    answer: "b",
  },
  {
    question: "HTML stands for ?",
    a: "Helicopter Transfer Mobile Limited",
    b: "Hyper Text MarkUp Language",
    c: "Hi To My Little Brother",
    d: "both a and b",
    answer: "b",
  },
];

let question = document.querySelector(".question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const button = document.getElementById("btn");
let radios = document.querySelectorAll(".radio");
let quizContainer = document.querySelector(".question-card");

button.addEventListener("click", checkSelection);
let currentQuiz = 0;
const Answer = [];
display();
function display() {
  if (currentQuiz < quizData.length) {
    let quiz = quizData[currentQuiz];
    question.textContent = quiz.question;
    a_text.textContent = quiz.a;
    b_text.textContent = quiz.b;
    c_text.textContent = quiz.c;
    d_text.textContent = quiz.d;
  } else {
    quizContainer.innerHTML = ` <h1 class="finished">Your Test is Finished Check You Answer</h1>`;
    button.innerText = "Check Your Answer";
    button.addEventListener("click", showResult);
  }
}
function checkSelection(e) {
  radios.forEach((radio) => {
    if (radio.checked) {
      checkAnswer(radio.id);

      currentQuiz++;
      display();
    }
  });
  setToDefault();
}

function setToDefault() {
  radios.forEach((radio) => {
    radio.checked = false;
  });
}

function checkAnswer(selectedID) {
  if (selectedID == quizData[currentQuiz].answer) {
    console.log("Your Answer is correct");
    Answer.push(1);
  }
}

function showResult() {
  let Result = (Answer.length / quizData.length) * 100;
  quizContainer.innerHTML = `<h1 class="quiz-result"><span class="green">${Answer.length}</span>/<span class="red">${quizData.length}</span></h1>`;
  quizContainer.classList.add("Result");
  if (Result < 33) {
    button.innerText = "You Have failed Test";
  } else if (Result > 33 && Result < 70) {
    button.innerText = "You have passed and average student";
  } else if (Result > 70 && Result < 90) {
    button.innerText = "you are awesome and smart";
  } else if (Result == 100) {
    button.innerText = "Congratulations! You are Amazing";
  }
}
