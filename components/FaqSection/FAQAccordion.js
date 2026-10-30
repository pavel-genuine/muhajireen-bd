import React, { useState } from "react";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion-wrap">
            {faqData.map((item, index) => (
                <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${openIndex === index ? "active" : ""}`}
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={openIndex === index}
                        >
                            {item.question}
                        </button>
                    </h2>
                    <div
                        className={`accordion-content ${openIndex === index ? "open" : ""}`}
                    >
                        <div className="accordion-body">{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const faqData = [
    { question: "What is the cost of a construction project?", answer: "Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure" },
    { question: "How can I ensure my project stays on schedule?", answer: "Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure" },
    { question: "How is the quality of materials ensured?", answer: "Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure" },
    { question: "What should I do if there are issues after completion?", answer: "Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure" },
    { question: "What permits are required for my project?", answer: "Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure" },
    { question: "What is the typical timeline for a construction project?", answer: "Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure" },
];

export default FAQAccordion;
