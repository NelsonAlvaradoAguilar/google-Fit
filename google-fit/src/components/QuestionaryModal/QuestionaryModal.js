import React from "react";
import "./QuestionaryModal.scss";

const QuestionaryModal = ({
  IsOpen,
  setModalIsOpen,
  id,
  answer,
  closeModal,
  question,
}) => {
  console.log(question);
  return (
    <div className={`modal ${IsOpen ? "modal__open" : ""}`}>
      <div className={`modal__content${IsOpen ? "modal__content--ease" : ""}`}>
        <p>{question.id}</p>
        <p>{answer}</p>
        <button className="modal__exit" onClick={closeModal}></button>
      </div>
    </div>
  );
};

export default QuestionaryModal;
