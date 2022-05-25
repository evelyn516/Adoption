import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Quiz({api}) {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const questions = [
    {
      question: "What kind of animal are you looking for?",
      answers: ["Cat", "Dog", "I don't mind"],
    },
    {
      question: "Big or small?",
      answers: ["Small", "Medium", "Big", "Size doesn't matter"],
    },
    {
      question: "Are you an active person?",
      answers: ["Couch Potato", "Reasonably", "Very"],
    },
    {
      question: "Do you have children at home?",
      answers: ["Yes - Young Children", "Yes - Teenagers", "No - Thank God"],
    },
    {
      question: "Do you have other pets?",
      answers: ["Yes - A Cat", "Yes - A Dog", "Nope"],
    },
    {
      question: "Do you have a fenced-in garden?",
      answers: [
        "Yes",
        "No - But there is a green space close by",
        "No - I live in the city",
      ],
    },
    {
      question: "How much time will your pet have to spend alone",
      answers: [
        "None - wfh",
        "Some - But I can arrange care",
        "Reasonable - I work a lot",
      ],
    },
    {
      question:
        "Would you be able to take a pet with some behavioural issues that needs extra training?",
      answers: ["Nope", "Minor", "Some", "I like a challenge"],
    },
  ]


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setResponse] = useState([]);
  const [selectAnswer, setSelectAnswer] = useState("");
  let responseItem = "";

  const handleChange = (e) => {
    console.log(e.target.value);
    responseItem = e.target.value;

    setSelectAnswer(responseItem);
  };

  const nextQuestion = async (e) => {
    e.preventDefault();
    console.log(e.target.selector.value);
    responseItem = e.target.selector.value;
    setResponse((state) => {
      const newValue = [...state, responseItem];
      console.log(newValue);
      return newValue;
    });
    if (!selectAnswer) {
      alert(" You must choose one answer to continue!");
    } else if (currentQuestion === questions.length -1){
      (
        async () =>{
            let options = {
              method: 'POST',
              body: JSON.stringify({quizData}),
              headers: {'Content-Type': 'application/json'}, withCredentials: true
            }
            const fetchreq = await fetch(`${api}posts/quiz/match/`, options)
            let content = await fetchreq.json()
            dispatch({
              type: "SET_QUIZDATA",
              value: content
            })
            return navigate('/match')
    }
    )
    ()
    }else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectAnswer("");
    }
  };

  if (currentQuestion === questions.length){
    (
        async () =>{
            let options = {
              method: 'POST',
              body: JSON.stringify({quizData}),
              headers: {'Content-Type': 'application/json'}, withCredentials: true
            }
            // const fetchreq = await fetch('http://127.0.0.1:8000/posts/quiz/match/', options)
            const fetchreq = await fetch(`${api}posts/quiz/match/`, options)
            let content = await fetchreq.json()
            dispatch({
              type: "SET_QUIZDATA",
              value: content
            })
            return navigate('/match')
    }
    )
    ()
  }

  return (
    <>
      <h1 className="questions"> {questions[currentQuestion].question}</h1>

      <div className="answers-grid">
        <form onSubmit={nextQuestion}>
          <select className="category" name="selector" onChange={handleChange}>
            <option className="single-opt">select one answer</option>

            {questions[currentQuestion].answers &&
              questions[currentQuestion].answers.map((answer) => (
                <option className="single-opt" value={answer} key={answer}>
                  {" "}
                  {answer}{" "}
                </option>
              ))}
          </select>

          {currentQuestion === questions.length  ? (
            <h1 className="questions">
              {" "}
              Questions answered! Link to the matching pets now
            </h1>
          ) : (
            <button className="next-q"> Next Question</button>
          )}
        </form>
      </div>

    </>
  );
}

export default Quiz;
