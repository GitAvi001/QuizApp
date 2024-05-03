const data = [
    {
      id: 1,
      question: "Which mammal is laying eggs?",
      answers: [
        { answer: "Dolphin", isCorrect: false },
        { answer: "Dog", isCorrect: false },
        { answer: "Cat", isCorrect: false },
        { answer: "platypus", isCorrect: true },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];

  //selecting the relevant screen
  const gameScreen = document.querySelector(".game")
  const resultScreen = document.querySelector(".result")
  const question = document.querySelector(".question")
  const answersContainer = document.querySelector(".answers")
  const submit=document.querySelector(".submit")
  const play = document.querySelector(".play")


  let qIndex= 0;
  let correctCount= 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer; 

  const playAgain = ()=>{

let qIndex= 0;
  let correctCount= 0;
  let wrongCount = 0;
  let total = 0;
  showQuestion(qIndex);
  }


  play.addEventListener("click", ()=>{
    
    resultScreen.computedStyleMap.display = "none"
    gameScreen.computedStyleMap.display="block"
    playAgain();

  })

  const showResult=()=>{

   
    resultScreen.computedStyleMap.display = "block"
    gameScreen.computedStyleMap.display="none"

    resultScreen.querySelector(".correct").textContent =
     `Correct Answers: ${correctCount}`

     resultScreen.querySelector(".correct").textContent =
     `Wrong Answers: ${wrongCount}`

     resultScreen.querySelector(".score").textContent =
     `Score: ${correctCount - wrongCount *10}`

  }

  const showQuestion = (qNumber) =>{
    if(qIndex === data.length) return showResult()

    //resting the answer in every question as null
    selectedAnswer = null;
    //selecting the question from the data arrays
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers
    .map((item,index)=>{

        `<div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
        </div>`
        
    }).join("");

    selectAnswer()
};

const selectAnswer = ()=>{


    answersContainer.querySelectorAll(".input").forEach(el=>{

        el.addEventListener("click", (e)=>{

            selectedAnswer =e.target.value;
        })
    })
}


//submit button interaction when true or wrong answers selecting
const submitAnswer= ()=>{

    submitAnswer.addEventListener("click", ()=>{
        if(selectedAnswer !== null){

        selectedAnswer === "true" ? correctCount++ : wrongCount++
        qIndex++
        showQuestion(qIndex)
        }else{
            alert("select an answer")
        }
    })
}

  showQuestion(qIndex);