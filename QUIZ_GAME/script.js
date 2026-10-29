// 1. Get a question from an array.
// 2. Display its answers.
// 3. Listen for a click.
// 4. Check whether the answer is correct.
// 5. Update the score.
// 6. Move to the next question.

/* =========================================================
   1. SELECTING HTML ELEMENTS
   ========================================================= */

// getElementById() finds an HTML element using its unique id.

// Find the screen that welcomes the player before the quiz starts.
const startScreen = document.getElementById("start-screen");

// Find the screen where the questions and answers are displayed.
const quizScreen = document.getElementById("quiz-screen");

// Find the screen that displays the player's final result.
const resultScreen = document.getElementById("result-screen");

// Find the button the player clicks to begin the quiz.
const startButton = document.getElementById("start-btn");

// Find the HTML element where the current question will appear.
const questionText = document.getElementById("question-text");

// Find the container that will hold the answer buttons.
const answersContainer = document.getElementById("answers-container");

// Find the element that displays the current question number.
const currentQuestionSpan = document.getElementById("current-question");

// Find the element that displays the total number of questions.
const totalQuestionSpan = document.getElementById("total-questions");

// Find the element that displays the player's current score.
const scoreSpan = document.getElementById("score");

// Find the element that displays the final score on the result screen.
// IMPORTANT: The id below must match your HTML exactly.
const finalScoreSpan = document.getElementById("final-sccore");

// Find the element that displays the maximum possible score.
const maxScoreSpan = document.getElementById("max-score");

// Find the element where the final motivational message appears.
const resultMessage = document.getElementById("result-message");

// Find the button the player clicks to play again.
const restartButton = document.getElementById("restart-btn");

// Find the visual progress bar that fills as the quiz continues.
const progressBar = document.getElementById("progress");

/* =========================================================
   2. STORING THE QUIZ QUESTIONS
   ========================================================= */

// const creates a variable whose value cannot be reassigned.
// quizQuestions is an array, meaning it stores multiple items.
// Each item is an object containing one question and its answers.

const quizQuestions = [
  {
    // The question property stores the question's text.
    question: "What is the capital of France?",

    // The answers property stores an array of answer objects.
    answers: [
      // Each object has the visible answer text and whether it is correct.
      { text: "London", correct: "false" },
      { text: "Berlin", correct: "false" },
      { text: "Paris", correct: "true" },
      { text: "Madrid", correct: "false" },
    ],
  },

  {
    question: "Which planet is known as the red planet?",
    answers: [
      { text: "Venus", correct: "false" },
      { text: "Mars", correct: "true" },
      { text: "Jupiter", correct: "false" },
      { text: "Saturn", correct: "false" },
    ],
  },

  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: "false" },
      { text: "Indian Ocean", correct: "false" },
      { text: "Arctic Ocean", correct: "false" },
      { text: "Pacific Ocean", correct: "true" },
    ],
  },

  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: "false" },
      { text: "Python", correct: "false" },
      { text: "Banana", correct: "true" },
      { text: "Javascript", correct: "false" },
    ],
  },

  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: "false" },
      { text: "Gd", correct: "false" },
      { text: "Au", correct: "true" },
      { text: "Ag", correct: "false" },
    ],
  },
];

/* =========================================================
   3. TRACKING THE QUIZ'S STATE
   ========================================================= */

// These variables remember what is happening during the game.

// Start at question zero because JavaScript arrays use zero-based indexing.
// Index 0 means the first question, index 1 means the second, and so on.
let currentQuestionIndex = 0;

// The player's score begins at zero.
let score = 0;

// This flag controls whether the player can select another answer.
// false means answers are enabled; true means answers are temporarily locked.
let answersDisabled = false;

// Display the total number of questions in the HTML.
totalQuestionSpan.textContent = quizQuestions.length;

// Display the maximum possible score.
// The player can earn one point for each question.
maxScoreSpan.textContent = quizQuestions.length;

/* =========================================================
   4. LISTENING FOR BUTTON CLICKS
   ========================================================= */

// addEventListener() tells an element to listen for an event.
// "click" is the event we want to detect.

// When the Start button is clicked, run the startQuiz function.
startButton.addEventListener("click", startQuiz);

// When the Restart button is clicked, run the restartQuiz function.
restartButton.addEventListener("click", restartQuiz);

/* =========================================================
   5. STARTING THE QUIZ
   ========================================================= */

// A function is a reusable block of code that performs a task.
// This function prepares the game and displays the first question.

function startQuiz() {
  // Reset the question index so the quiz begins at question one.
  currentQuestionIndex = 0;

  // Reset the player's score for a new game.
  score = 0;

  // Update the score displayed on the page to show zero.
  scoreSpan.textContent = 0;

  // Remove the "active" class from the welcome screen.
  // Your CSS should use this class to control screen visibility.
  startScreen.classList.remove("active");

  // Add the "active" class to show the quiz screen.
  quizScreen.classList.add("active");

  // Call the function that displays the current question.
  showQuestion();
}

/* =========================================================
   6. DISPLAYING A QUESTION
   ========================================================= */

// This function reads the current question from the array
// and builds its answer buttons inside the HTML.

function showQuestion() {
  // Unlock the answers because a new question is being displayed.
  answersDisabled = false;

  // Get the question object at the current array index.
  // For example, index 0 retrieves the France question.
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Display the question number to the player.
  // Add 1 because the first array index is 0, but players count from 1.
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  // Calculate how far through the quiz the player has progressed.
  // Divide the current index by the total questions and multiply by 100.
  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;

  // Set the progress bar's CSS width to the calculated percentage.
  // For example, a value of 40 produces a width of "40%".
  progressBar.style.width = progressPercent + "%";

  // Put the current question's text into its HTML element.
  questionText.textContent = currentQuestion.question;

  // Clear the previous question's answer buttons.
  // Otherwise, old answers would remain when the next question appears.
  answersContainer.innerHTML = "";

  // Loop through every answer belonging to the current question.
  // forEach() runs the supplied function once for each array item.
  // "answer" represents the individual answer object in each iteration.
  currentQuestion.answers.forEach((answer) => {
    // Create a new HTML button using JavaScript.
    // This button does not exist in the HTML until we create it.
    const button = document.createElement("button");

    // Set the visible text on this button to the answer's text.
    button.textContent = answer.text;

    // Add the CSS class used to style answer buttons.
    button.classList.add("answer-btn");

    // Store whether this answer is correct in a custom data attribute.
    // The browser makes this available through button.dataset.correct.
    button.dataset.correct = answer.correct;

    // Make this button run selectAnswer when the player clicks it.
    button.addEventListener("click", selectAnswer);

    // Insert the newly created button into the answers container.
    // appendChild() adds the button as a child of that HTML element.
    answersContainer.appendChild(button);
  }); // End of the loop that creates the answer buttons.
}

/* =========================================================
   7. CHECKING THE PLAYER'S ANSWER
   ========================================================= */

// This function runs when the player clicks an answer button.
// The browser passes information about the click into "event".

function selectAnswer(event) {
  // If answers are already locked, stop this function immediately.
  // This prevents the player from scoring multiple times on one question.
  if (answersDisabled) return;

  // Lock the answers immediately after the first selection.
  answersDisabled = true;

  // event.target is the HTML element that was clicked.
  // Here, it should be the selected answer button.
  const selectedButton = event.target;

  // Read the selected button's data attribute.
  // Compare it with the string "true" to determine correctness.
  const isCorrect = selectedButton.dataset.correct === "true";

  // Convert the answer buttons into an ordinary array.
  // This allows us to use forEach() to inspect every button.
  // Here Array.from() is used to convert the Nodelist returned by answersContainer.children into an array, this is because the Nodelist is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    // Check whether this particular button represents the correct answer.
    if (button.dataset.correct === "true") {
      // Add the "correct" CSS class to highlight the right answer.
      button.classList.add("correct");
    } else if (button === selectedButton) {
      // Add the "incorrect" CSS class to mark a wrong answer.
      button.classList.add("incorrect");
    }
  }); // End of the loop that marks the answer buttons.

  // Only increase the score when the player's selected answer is correct.
  if (isCorrect) {
    // The ++ operator increases the score by one.
    score++;

    // Update the visible score so the player sees their new total.
    scoreSpan.textContent = score;
  }

  // Wait 1,000 milliseconds (one second) before moving on.
  // This gives the player time to see which answer was correct.
  setTimeout(() => {
    // Move to the next question by increasing the array index.
    currentQuestionIndex++;

    // Check whether another question remains.
    // length gives the total number of questions in the array.
    if (currentQuestionIndex < quizQuestions.length) {
      // If questions remain, display the next one.
      showQuestion();
    } else {
      // If no questions remain, finish the quiz and show the results.
      showResults();
    }
  }, 1000); // End the delay after one second.
}

/* =========================================================
   8. DISPLAYING THE FINAL RESULTS
   ========================================================= */

// This function runs after the player answers the final question.

function showResults() {
  // Hide the quiz screen by removing its active class.
  quizScreen.classList.remove("active");

  // Show the results screen by adding its active class.
  resultScreen.classList.add("active");

  // Display the final score the player achieved.
  finalScoreSpan.textContent = score;

  // Calculate the percentage of questions answered correctly.
  // Divide the score by the NUMBER of questions, not the array itself.
  const percentage = (score / quizQuestions.length) * 100;

  // Choose a message based on the player's final percentage.
  if (percentage === 100) {
    // Show this message if every answer was correct.
    resultMessage.textContent = "Perfect, you are a genius!";
  } else if (percentage >= 80) {
    // Show this message if the score is at least 80%.
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    // Show this message if the score is at least 60%, but below 80%.
    resultMessage.textContent = "Good effort! Keep learning!";
  } else {
    // Show this message if the score is below 60%.
    resultMessage.textContent = "Keep studying!";
  }
}

/* =========================================================
   9. RESTARTING THE QUIZ
   ========================================================= */

// This function runs when the player clicks the Restart button.

function restartQuiz() {
  // Hide the results screen.
  resultScreen.classList.remove("active");

  // Reuse startQuiz() to reset the score and question index,
  // show the quiz screen, and display the first question again.
  startQuiz();
}

/*

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-sccore");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz Questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: "false" },
      { text: "Berlin", correct: "false" },
      { text: "Paris", correct: "true" },
      { text: "Madrid", correct: "false" },
    ],
  },
  {
    question: "Which planet is known as the red planet?",
    answers: [
      { text: "Venus", correct: "false" },
      { text: "Mars", correct: "true" },
      { text: "Jupiter", correct: "false" },
      { text: "Saturn", correct: "false" },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: "false" },
      { text: "Indian Ocean", correct: "false" },
      { text: "Arctic Ocean", correct: "false" },
      { text: "Pacific Ocean", correct: "true" },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: "false" },
      { text: "Python", correct: "false" },
      { text: "Banana", correct: "true" },
      { text: "Javascript", correct: "false" },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: "false" },
      { text: "Gd", correct: "false" },
      { text: "Au", correct: "true" },
      { text: "Ag", correct: "false" },
    ],
  },
];

// QUIZ STATE VARIABLES
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  //reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  // update the progress bar

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;

  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // Dataset: Usedwhen I wwant to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  //optimixation check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are moore questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect, you are a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else {
    resultMessage.textContent = "Keep studying!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
*/
