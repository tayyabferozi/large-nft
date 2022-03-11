import React from "react";
import $ from "jquery";

const FaqItem = ({ question, answer }) => {
  const toggleAnswer = (e) => {
    let $this = $(e.target);

    $this.parents(".faq-item").toggleClass("open");
    $this.parents(".faq-item").children(".faq-answer").slideToggle();
  };

  return (
    <div className="faq-item">
      <div onClick={toggleAnswer} className="faq-question">
        {question}
      </div>
      <div style={{ display: "none" }} className="faq-answer">
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
