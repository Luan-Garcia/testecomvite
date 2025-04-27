import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "O que são roadmaps?",
      answer: "Roadmaps são guias estruturados que mostram um caminho de aprendizado para dominar uma tecnologia ou área específica."
    },
    {
      question: "Por que usar roadmaps?",
      answer: "Roadmaps ajudam a organizar seu aprendizado, evitando que você perca tempo com conteúdos desnecessários ou fora de ordem."
    },
    {
      question: "Como saber em qual área devo me aprofundar?",
      answer: "Recomendamos explorar diferentes áreas através de projetos introdutórios para descobrir o que mais desperta seu interesse."
    },
    {
      question: "É possível seguir mais de um roadmap ao mesmo tempo?",
      answer: "Sim, mas recomendamos focar em um roadmap principal e complementar com outro relacionado para maximizar o aprendizado."
    },
    {
      question: "Consigo usar os roadmaps pelo celular?",
      answer: "Sim, nossa plataforma é totalmente responsiva e otimizada para uso em dispositivos móveis."
    }
  ];

  return (
    <section className="faq">
      <h2>PERGUNTAS FREQUENTES</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div 
              className="accordion-header" 
              onClick={() => toggleAccordion(index)}
            >
              <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>▼</span>
              {item.question}
            </div>
            <div 
              className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
