import React, { useEffect, useRef } from "react";
import "./FAQ.css";

import $ from "jquery";
import "jquery-ui/themes/base/all.css";

(window as any).$ = $;
(window as any).jQuery = $;

const FAQ: React.FC = () => {
  const accordionRef = useRef<HTMLDivElement>(null);

  const faqData = [
    {
      question: "Как забронировать тур?",
      answer:
        "Выберите направление в каталоге, добавьте в корзину и оформите заказ. После этого с вами свяжется персональный менеджер для уточнения деталей и подписи электронного договора. Оплата через Stripe — за секунду.",
    },
    {
      question: "Могу ли я изменить даты или отменить поездку?",
      answer:
        "Да, для премиум-клиентов у нас гибкая политика. Бесплатная отмена за 30 дней до вылета, за 14 дней — возврат 80%. Подробные условия прописаны в вашем личном кабинете.",
    },
    {
      question: "Вы помогаете с визой и страховкой?",
      answer:
        "Конечно. Мы берем на себя подготовку документов, запись в консульство и оформление расширенной страховки, покрывающей даже активные виды спорта.",
    },
    {
      question: "Есть ли рассрочка или кредит?",
      answer:
        "Для туров от 300 000 ₽ доступна беспроцентная рассрочка на 3 или 6 месяцев через наш партнёрский банк.",
    },
  ];

  useEffect(() => {
    const initAccordion = async () => {
      await import("jquery-ui/ui/widget");
      await import("jquery-ui/ui/unique-id");
      await import("jquery-ui/ui/widgets/accordion");

      if (accordionRef.current) {
        $(accordionRef.current).accordion({
          collapsible: true,
          active: 0,
          heightStyle: "content",
          animate: 300,
        });
      }
    };

    initAccordion();

    return () => {
      if (accordionRef.current) {
        try {
          $(accordionRef.current).accordion("destroy");
        } catch {}
      }
    };
  }, []);

  return (
    <section className="faq-wrapper">
      <div className="container-fluid max-w-container">
        <div className="text-center mb-5">
          <span className="faq-subtitle">Ответы на вопросы</span>
          <h2 className="section-title">Часто задаваемые вопросы</h2>
          <div className="title-separator mx-auto"></div>
        </div>

        <div className="faq-accordion-container">
          <div ref={accordionRef} className="faq-accordion">
            {faqData.map((item, index) => (
              <React.Fragment key={index}>
                <h3 className="faq-question">{item.question}</h3>
                <div className="faq-answer-box">
                  <p>{item.answer}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
