import { questions } from "../../data/api";
import { useState } from "react";
import QuestionaryModal from "../QuestionaryModal/QuestionaryModal";

import "./AiRoll.scss";
const AiRoll = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  const [answer, setAnswer] = useState(null);

  const handleShowModal = (id, answer) => {
    setModalIsOpen(true);
    setQuestionId(id);
    setAnswer(answer);
    console.log(answer);
    console.log(questionId);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setQuestionId(null);
  };
  console.log(questions);
  return (
    <section className="Airoll">
      <h1 className="Airoll__title">Worry-Free Support!</h1>
      <p className="Airoll__content">
        At Google Fit, we understand that embracing new features can come with
        questions and concerns. Rest assured, we're here to address any
        uncertainties you may have. Our team is dedicated to providing clear
        answers and support every step of the way, ensuring your experience with
        our new AI features is smooth and stress-free. Your satisfaction and
        confidence are our top priorities
      </p>
      <ul className="Airoll__questionary">
        {questions.map((question, index) => {
          return (
            <li key={question.id} className="Airoll__list-of-question">
              <div className="Airoll__questions-container">
                {" "}
                <h1
                  onClick={() => {
                    handleCloseModal();
                  }}
                  className="Airoll__question"
                >
                  {question.question}{" "}
                </h1>{" "}
                <div
                  onClick={() => {
                    handleShowModal(question.id, question.answer);
                  }}
                  className={`Airoll__arrow ${
                    question.id === questionId ? "Airoll__arrow--down" : ""
                  }`}
                >
                  {""}
                </div>
              </div>
              {questionId === question.id && (
                <QuestionaryModal
                  IsOpen={modalIsOpen}
                  setModalIsOpen={setModalIsOpen}
                  id={questionId}
                  answer={answer}
                  closeModal={handleCloseModal}
                />
              )}
            </li>
          );
        })}{" "}
      </ul>
    </section>
  );
};

export default AiRoll;
//   <button className="question__close" cursor={"pointer"}></button>
