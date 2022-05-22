import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

function Quiz() {
const [questions, setQuestions] = useState ([
  {question:'What kind of animal are you looking for?', answers: ['cat', 'dog', 'I don\'t mind!']},
  {question:'Big or small?', asnwers: ['small', 'medium', 'big', 'size doesn\'t matter!' ]},
  {question:'Are you an active person?', answers: ['couch potato', 'reasonably', 'very']},
  {question:'Do you have children at home?', answers: ['yes - young children', 'yes - teenagers', 'no-thank god']},
  {question:'do you have other pets?', answers: ['yes - a cat', 'yes - a dog', 'nope']},
  {question:'do you have a fenced-in garden?', answers: ['yes', 'no - but there\'s green space close-by', 'no - I live in the city']},
  {question:'what kind of maintenance can you provide for grooming?', asnwers: ['ew hair', 'some', 'so fluffy!']},
  {question:'How much time will your pet have to spend alone', answers: ['none - wfh', 'some - but I can arrange care', 'reasonable - I work a lot']},
  {question:'Would you be able to take a pet with some behavioural issues that needs extra training?', answers: ['nope', 'minor', 'some', 'I like a challenge']},
  {question:'Can you tolerate some damage to your furniture and clothes until your pet is trained?', answers: ['nope', 'a little', 'I don\'t mind']
}])

  return (
    <>


  

{questions.map(question=>(
<div key={questions}>
<p>{question.question}</p>


{questions.answers.map(answer=><p key={answer}>{answer}</p>)}

</div>))}
     {/* {questions.map(question=><p key={question}>{question.question}</p>)} */}
    
    </>
  );
}

export default Quiz;
