import { questions } from "../../data/api";
import { useState } from "react";
import QuestionaryModal from "../QuestionaryModal/QuestionaryModal";
import bubbles from "../../assets/bubbles/Group 1.svg";
import "./AiRoll.scss";
const AiRoll = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [question, setQuestion] = useState(null);
  console.log(question);
  const handleShowModal = (id, answer, question) => {
    setModalIsOpen(true);
    setQuestionId(id);
    setAnswer(answer);
    setQuestion(question);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setQuestionId(null);
    setQuestion(null);
  };

  return (
    <section className="Airoll">
      <div className="Airoll__content">
        <img className="Airoll__bubbles" src={bubbles}></img>
        <div>
          <h1 className="Airoll__title">Worry-Free Support!</h1>
          <p className="Airoll__content">
            At Google Fit, we understand that embracing new features can come
            with questions and concerns. Rest assured, we're here to address any
            uncertainties you may have. Our team is dedicated to providing clear
            answers and support every step of the way, ensuring your experience
            with our new AI features is smooth and stress-free. Your
            satisfaction and confidence are our top priorities
          </p>
        </div>
      </div>

      <ul className="Airoll__questionary">
        {questions.map((question, index) => {
          return (
            <li
              key={question.id}
              className={`Airoll__list-of-question${
                question.id === questionId
                  ? "Airoll__list-of-question--border-top"
                  : index === 0
                  ? " Airoll__list-of-question--zero"
                  : ""
              }`}
            >
              <div className="Airoll__questions-container">
                {" "}
                <div
                  className={`Airoll__question-arrow ${
                    question.id === questionId
                      ? "Airoll__question-arrow--width"
                      : ""
                  }`}
                >
                  <h1
                    className={`Airoll__question ${
                      question.id === questionId
                        ? "Airoll__question--position"
                        : ""
                    }`}
                  >
                    {question.question}{" "}
                  </h1>{" "}
                  <div
                    onDoubleClick={() => {
                      handleCloseModal();
                    }}
                    onClick={() => {
                      handleShowModal(
                        question.id,
                        question.answer,
                        question.question
                      );
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
                    question={questions}
                  />
                )}
              </div>
            </li>
          );
        })}{" "}
      </ul>
    </section>
  );
};

export default AiRoll;
