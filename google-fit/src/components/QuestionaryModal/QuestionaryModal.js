import React from "react";
import "./QuestionaryModal.scss";
import { useNavigate } from "react-router-dom";

function QuestionaryModal({ isOpen, answer, closeModal }) {
  if (isOpen) return null;
  return (
    <section className="modal">
      <div className="modal__exit" cursor={"pointer"}>
        {" "}
      </div>
      <p onClick={closeModal} className="modal__confirmation">
        {answer}
      </p>
    </section>
  );
}

export default QuestionaryModal;
