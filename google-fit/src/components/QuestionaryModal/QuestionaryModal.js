import React from "react";
import "./QuestionaryModal.scss";
import { useNavigate } from "react-router-dom";

function QuestionaryModal({ setModalIsOpen, isOpen, answer, closeModal }) {
  if (isOpen) return null;
  return (
    <section className="modal">
      <div className="modal__exit" cursor={"pointer"}>
        <p onClick={closeModal} className="modal__confirmation">
          {answer}
        </p>
      </div>
    </section>
  );
}

export default QuestionaryModal;
