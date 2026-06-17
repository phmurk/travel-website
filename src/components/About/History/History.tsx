import "./History.css";

import HistoryImage from "../../../assets/history.webp";

const History = () => {
  return (
    <section className="history-wrapper">
      <div className="container-fluid max-w-container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="history-image-box">
              <img
                src={HistoryImage}
                alt="Путешествие VOYAGER"
                className="history-img"
              />
              <div className="experience-badge">
                <span className="experience-years">С 2015</span>
                <span className="experience-text">года на рынке</span>
              </div>
              <div className="history-img-backdrop"></div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="history-content-box">
              <div className="text-center mb-3">
                <h2 className="history-title">Наша история</h2>
                <div className="title-separator"></div>
              </div>

              <div className="history-text">
                <p>
                  <strong>VOYAGER</strong> была основана в 2015 году с простой
                  целью: дать людям возможность исследовать мир на своих
                  условиях. Что началось как небольшая компания с одним офисом,
                  теперь превратилось в признанного лидера туристического рынка.
                </p>
                <p>
                  Мы верим, что путешествие - это не только о посещении новых
                  мест. Это о понимании разных культур, установлении связей с
                  людьми и открытии нового в себе. Каждый тур, который мы
                  организуем, разработан с учетом этой философии.
                </p>
                <p>
                  Наша команда состоит из опытных путешественников, которые сами
                  прошли по маршрутам, которые мы предлагаем. Мы знаем все о
                  трудностях и радостях путешествий, и используем это знание
                  чтобы создать идеальный опыт для наших клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
