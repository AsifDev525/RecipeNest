import React, { useState } from 'react'
import "./Faq.css"

const Faq = () => {

    const[activeIndex, setactiveIndex] =useState(null);

    const toggleAnswer = (index) =>{
        setactiveIndex(activeIndex === index ? null : index);
    }
    const faqs = [
        {
            question: "What is RecipeNest?",
            answer: "RecipeNest is a simple and fun platform where you can discover a variety of cooking recipes for everyday meals."
          },
          {
            question: "Is RecipeNest free to use?",
            answer: "Absolutely! All features on RecipeNest are 100% free for everyone."
          },
          {
            question: "Do I need to sign up to use the site?",
            answer: "Yes, you need to sign up or log in to access and use RecipeNest features like viewing and saving recipes."
          },
          {
            question: "Can I use RecipeNest on my phone?",
            answer: "Yes! RecipeNest is mobile-friendly and works smoothly on any device."
          },
          {
            question: "How can I get in touch with the RecipeNest team?",
            answer: "Just head to our Contact Us page, fill out the form, and we’ll get back to you as soon as possible."
          }
    ];

  return (
    <>
      <h1 className="faq-heading">FAQ (Frequently Asked Questions)</h1>
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {faq.question}
            <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}>&#9656;</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
    </>
  )
};

export default Faq