import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

function Quiz() {
const [questions, setQuestions] = useState ([
  {question:'What kind of animal are you looking for?', answers: ['cat', 'dog', 'I don\'t mind!']},
  {question:'Big or small?', answers: ['small', 'medium', 'big', 'size doesn\'t matter!' ]},
  {question:'Are you an active person?', answers: ['couch potato', 'reasonably', 'very']},
  {question:'Do you have children at home?', answers: ['yes - young children', 'yes - teenagers', 'no-thank god']},
  {question:'Do you have other pets?', answers: ['yes - a cat', 'yes - a dog', 'nope']},
  {question:'Do you have a fenced-in garden?', answers: ['yes', 'no - but there\'s green space close-by', 'no - I live in the city']},
  {question:'What kind of maintenance can you provide for grooming?', answers: ['ew hair', 'some', 'so fluffy!']},
  {question:'How much time will your pet have to spend alone', answers: ['none - wfh', 'some - but I can arrange care', 'reasonable - I work a lot']},
  {question:'Would you be able to take a pet with some behavioural issues that needs extra training?', answers: ['nope', 'minor', 'some', 'I like a challenge']},
  {question:'Can you tolerate some damage to your furniture and clothes until your pet is trained?', answers: ['nope', 'a little', 'I don\'t mind']
}])


const [currentQuestion, setCurrentQuestion] = useState(0)
const [response, setResponse] = useState([])
const nextQuetions = currentQuestion + 1;
let responseItem = ''

const handleResponse = (e) => {
responseItem = e.target.value
setResponse(response.push(responseItem))
console.log(response)

}

const nextQuestion = () => {
  if (responseItem === "") {
    alert(" You must choose one answer to continue!")
  } else{
    setCurrentQuestion(currentQuestion + 1)

  }
}

// if (currentQuestion === "") {

  return (

<>

{/* <div className="main-quiz">  

<h1 className="questions"> {questions[currentQuestion].question}</h1>
{questions[currentQuestion].answers.map((answer, i) => (<button key={i} value={answer[i]} onClick={() => handleResponse()} className="answer-btn"> {answer} </button>))}

</div> */}
<h1 className="questions"> {questions[currentQuestion].question}</h1>

<div className="answers-grid">
         
          <select className="category" value={questions[currentQuestion].answers} onChange={handleResponse}>
            
          <option className="single-opt">select one answer</option>

          {questions[currentQuestion].answers && questions[currentQuestion].answers.map((answer) => (
          <option className="single-opt" value={answer} key={answer[currentQuestion]}> {answer} </option> ))}

          </select>
        </div>
{currentQuestion === questions.length - 1 ? ( <h1 className="questions"> All the questions answered!!!</h1>) : (<button className="next-q" onClick={() => nextQuestion()}> Next Question</button> )}
          


</>
);

}

export default Quiz;
