import React from "react";
import "./QuestionaryModal.scss";

function QuestionaryModal({ isOpen, answer, closeModal }) {
  return (
    <section className={`modal ${isOpen ? "open" : ""}`}>
      <div onClick={closeModal} className="modal__exit" cursor={"pointer"}>
        {""}
      </div>
      <p className="modal__answer">{answer}</p>
    </section>
  );
}

export default QuestionaryModal;
