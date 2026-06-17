import React from "react";
import "./Values.css";

const Values: React.FC = () => {
  const valuesData = [
    {
      id: "01",
      title: "Исключительность",
      text: "Ни одного шаблонного тура. Каждое путешествие проектируется под вас, как платье от кутюр.",
    },
    {
      id: "02",
      title: "Экспертность",
      text: "Наши менеджеры сами объездили более 50 стран. Мы делимся только личным опытом, а не рекламными буклетами.",
    },
    {
      id: "03",
      title: "Прозрачность",
      text: "Цена финальная, без сюрпризов. Вы платите ровно столько, сколько видите в корзине, включая страховку и скрытые сборы.",
    },
    {
      id: "04",
      title: "Забота 24/7",
      text: "Координатор на связи в любой точке мира. Потому что премиум — это когда о вас думают, даже когда вы спите.",
    },
  ];

  return (
    <section className="values-wrapper">
      <div className="container-fluid max-w-container">
        <div className="text-center mb-5">
          <h2 className="section-values-title">Наши ценности</h2>
          <div className="title-separator"></div>
        </div>

        <div className="row g-4 justify-content-center">
          {valuesData.map((item, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={index}>
              <div className="value-card h-100">
                <div className="value-number-wrapper">
                  <span className="value-number">{item.id}</span>
                </div>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
