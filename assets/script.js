// variables to keep track of quiz state
// variables to reference DOM elements
// var timerEl = document.getElementById("timer")


var startBtn = document.getElementById('start-btn')
var nextBtn = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question')
var questionEl = document.getElementById('question-box')
var answerEl = document.getElementById('answer-btns')

let shuffledQue, queIndex;
let quizScore = 0; 

//timer displayed at top of page
var timeLeft = document.getElementById("count")
var timer = 90;

setInterval(function() {
    timer--;
    timeLeft.innerHTML = timer;
    if (timer === 0) {
      clearInterval(timer);
      // showResults();
    }
  }, 1000);
 




// startBtn.addEventListener('click', beginQuiz)

// nextBtn.addEventListener('click', () =>{
//   queIndex ++
//   setNextQue()
// })

// function beginQuiz() {
//   startBtn.classList.add('hide')
//   shuffledQue = questions.sort(() => Math.random() -0.5)
//   queIndex = 0
//   questionEl.classList.remove('hide')
//   setNextQue()
//   quizScore = 0
// }

// function setNextQue() {
//   resetState();
//   showQue(shuffledQue[queIndex])
// }

// function showQue(question) {
//   questionEl.innerText = question.question;
//   question.answers.forEach((answers) => {
//     var button = document.createElement('button')
//     button.innerText = answers.text;
//     button.classList.add('btn')
//     if (answers.correct) {
//       button.dataset.correct = answers.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerEl.appendChild(button)
//   })
// }

// function selectAnswer(e){
//   var selectedButton = e.target
//   var correct = selectedButton.dataset.correct

//   setStatusClass(document.body, correct)
//   Array.from(answerEl.children).forEach((button) => {
//     setStatusClass(button, button.dataset.correct)
//   }) 
//   if(shuffledQue.length > queIndex +1){
//     nextBtn.classList.remove("hide")
//   } else {
//     startBtn.innerText = "restart"
//     startBtn.classList.remove("hide")
//   }
//   if(selectedButton.dataset = correct) {
//     quizScore ++
//   }
//   document.getElementById('correct-answer').innerText = quizScore
// }

// function resetState() {
//   clearStatusClass(document.body)
//   nextBtn.classList.add('hide')
//   while(answerEl.firstChild) {
//     answerEl.removeChild(answerEl.firstChild)
//   }
// }

// function setStatusClass(element,correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add("correct")
//   } else {
//     element.classList.add("wrong")
//   }
// }


// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }

// var questions = [
//   {
//     question: 'Commonly used data types DO NOT include:',
//     answers: [
//       {text: 'string', correct: false},
//       {text: 'booleans', correct: false},
//       {text: 'alerts', correct: true},
//       {text: 'numbers', correct: false},
//     ],
//   },
//   {
//     question: 'The condition in an if / else statement is enclosed within ____.',
//     answers: [
//       {text: 'quotes', correct: false},
//       {text: 'curly brackets', correct: false},
//       {text: 'parentheses', correct: true},
//       {text: 'square brackets', correct: false},
//     ],
//   },
//   {
//     question: 'Arrays in JavaScript can be used to store ____.',
//     answers: [
//       {text: 'numbers and strings', correct: false},
//       {text: 'other arrays', correct: false},
//       {text: 'booleans', correct: false},
//       {text: 'all answers are correct', correct: true},
//     ],
//   },
//   {
//     question: 'String values must be enclosed within ____ when being assigned to variables.',
//     answers: [
//       {text: 'quotes', correct: true},
//       {text: 'curly brackets', correct: false},
//       {text: 'parentheses', correct: false},
//       {text: 'commas', correct: false},
//     ],
//   },
//   {
//     question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
//     answers: [
//       {text: 'Javascript', correct: false},
//       {text: 'terminal/bash', correct: false},
//       {text: 'for loops', correct: false},
//       {text: 'console.log', correct: true},
//     ],
//   },
// ]

//function to get the quiz going 

//function to pull each question
    //current question from questions
    //updated DOM elements to reflect the new question
    //clear old question choices
    //loop over answer choices (TIP: ForEach ;) ) 
    //create new button for each choice
    //event listener for each choice
    //display on the page

//function for the questionclick 
  //did the user guess right or wrong
  //wrong guess decreases time
  //display new time on the page
  //move to the next question
  //check if there are any questions left/you've run out

//function to end the quiz
  //stops timer
  //shows end screen
  //shows final score
  //hides questions section

 //function for the clock 
  //updates time
  //checks if user ran out of time 

//function to save the high score
  //get value of input box
  //make sure value isnt empty
  //get saved scores from localstorage, or if not any, set to empty array
  //format new score object for current user 
  //save to localstorage
  //redirect to next page




// user clicks button to submit initials


// user clicks button to start quiz