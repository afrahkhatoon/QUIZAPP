const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

const myQuestions = [
  {
    question: "what is the capital of France?",
    answers: {
      a: "Paris",
      b: "London",
      c: "New York",
    },
    correctAnswer: "a",
  },
  {
    question: "what is the largest country in the world?",
    answers: {
      a: "Russia",
      b: "China",
      c: "United States",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Yuan",
      b: "Euro",
      c: "Yen",
    },
    correctAnswer: "c",
  },
];

function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label><input type="radio" name="question${questionNumber}"value="${letter}"/>${letter}:${currentQuestion.answers[letter]}
                    </label>`
      );
    }
    //console.log(answers);
    output.push(
      `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join("")}</div>`
    );
  });
  //console.log(output);
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  console.log("answer containers", answerContainers);

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    //find select answer
    const answerContainer = answerContainers[questionNumber];
    console.log("answer container", answerContainer);
    const selector = `input[name=question${questionNumber}]:checked`;
    console.log("selector", selector);
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    console.log("userAnswer", userAnswer);

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
      // console.log(userAnswer);
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
}

buildQuiz();

submitButton.addEventListener("click", showResults);
