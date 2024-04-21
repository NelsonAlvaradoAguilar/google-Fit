import React from "react";
import "./QuestionaryModal.scss";

import { useNavigate } from "react-router-dom";

function QuestionaryModal({ isOpen, answer, closeModal }) {
  if (isOpen) return null;
  return (
    <section className="modal">
      <div onClick={closeModal} className="modal__exit" cursor={"pointer"}>
        {""}
      </div>
      <p className="modal__answer">{answer}</p>
    </section>
  );
}

export default QuestionaryModal;
