import React from "react";
import "./Map.css";

const Map: React.FC = () => {
  return (
    <section className="map-section-wrapper">
      <div className="container-fluid max-w-container">
        <div className="text-center mb-5">
          <span className="map-subtitle">Ждем вас в гости</span>
          <h2 className="section-title">Мы на карте</h2>
          <div className="title-separator mx-auto"></div>
        </div>

        <div className="map-container">
          <div className="map-corner top-left"></div>
          <div className="map-corner top-right"></div>
          <div className="map-corner bottom-left"></div>
          <div className="map-corner bottom-right"></div>

          <iframe
            title="Офис VOYAGER на карте"
            src="https://maps.google.com/maps?q=Минск,+ул.+Петруся+Бровки,+14&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
