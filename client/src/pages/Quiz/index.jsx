import React from "react";
import { useState } from "react";
import "./style.css";

function Quiz() {
const [questions, setQuestions] = useState ([
  {question:'What kind of animal are you looking for?', answers: ['cat', 'dog', 'I don\'t mind!']},
  {question:'Big or small?', answers: ['small', 'medium', 'big', 'size doesn\'t matter!' ]},
  {question:'Are you an active person?', answers: ['couch potato', 'reasonably', 'very']},
  {question:'Do you have children at home?', answers: ['yes - young children', 'yes - teenagers', 'no-thank god']},
  {question:'Do you have other pets?', answers: ['yes - a cat', 'yes - a dog', 'nope']},
  {question:'Do you have a fenced-in garden?', answers: ['yes', 'no - but there\'s green space close-by', 'no - I live in the city']},
  {question:'How much time will your pet have to spend alone', answers: ['none - wfh', 'some - but I can arrange care', 'reasonable - I work a lot']},
  {question:'Would you be able to take a pet that needs extra training?', answers: ['nope', 'minor', 'some', 'I like a challenge']},
])


const [currentQuestion, setCurrentQuestion] = useState(0)
const [response, setResponse] = useState([])
const [selectAnswer, setSelectAnswer] = useState("")
let responseItem = ''

const handleResponse = (e) => {
responseItem = e.target.value
setResponse((state) => {
  const newValue = [...state,responseItem]
  console.log(newValue)
  return newValue
})
setSelectAnswer(responseItem)

}

const nextQuestion = () => {
 
  if (!selectAnswer) {
    alert(" You must choose one answer to continue!")
  } else{
    setCurrentQuestion(currentQuestion + 1)
    setSelectAnswer("")
    // alert(response)

  }
}

// if (currentQuestion === "") {

  return (

<>


<h1 className="questions"> {questions[currentQuestion].question}</h1>

<div className="answers-grid">
         
          <select className="category"  value={selectAnswer} onChange={handleResponse}>
            
          <option className="single-opt">select one answer</option>

          {questions[currentQuestion].answers && questions[currentQuestion].answers.map((answer) => (
          <option className="single-opt" value={answer} key={answer}> {answer} </option> ))}

          </select>
        </div>
{currentQuestion === questions.length - 1 ? ( <h1 className="questions"> Questions answered! Link to the matching pets now</h1>) : (<button className="next-q" onClick={() => nextQuestion()}> Next Question</button> )}
{currentQuestion === questions.length - 1 && <ul>{response.map((r) => <li>{r}</li>)}</ul>}        

</>
);

}

export default Quiz;
