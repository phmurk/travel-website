import History from "../../components/About/History/History";
import Mission from "../../components/About/Mission/Mission";
import Values from "../../components/About/Values/Values";
import Contacts from "../../components/About/Contacts/Contacts";
import Map from "../../components/About/Map/Map";
import FAQ from "../../components/About/FAQ/FAQ";
import ContactForm from "../../components/About/ContactForm/ContactForm";
import Newsletter from "../../components/About/Newsletter/Newsletter";

import "../About/About.css";

function About() {
  return (
    <>
      <section className="about-hero py-5">
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-3">О VOYAGER</h2>

          <p className="lead mx-auto about-text">
            Более 10 лет мы помогаем путешественникам открывать мир и создавать
            незабываемые воспоминания
          </p>
          <div className="about-badge">
            Более 10 000 счастливых путешественников по всему миру
          </div>
        </div>
      </section>
      <History />
      <Mission />
      <Values />
      <Contacts />
      <Map />
      <FAQ />
      <ContactForm />
      <Newsletter />
    </>
  );
}

export default About;
