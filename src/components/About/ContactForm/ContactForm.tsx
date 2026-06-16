import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");

    if (!val) {
      setFormData({ ...formData, phone: "" });
      setErrors({ ...errors, phone: "" });
      return;
    }

    if (val.length < 3) {
      val = "375";
    } else if (!val.startsWith("375")) {
      val = "375" + val;
    }

    let formatted = "+375";
    if (val.length > 3) {
      formatted += " " + val.substring(3, 5);
    }
    if (val.length > 5) {
      formatted += " " + val.substring(5, 8);
    }
    if (val.length > 8) {
      formatted += " " + val.substring(8, 12);
    }

    setFormData({ ...formData, phone: formatted });
    if (errors.phone) setErrors({ ...errors, phone: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    let newErrors: { email?: string; phone?: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Введите корректный email адрес";
      isValid = false;
    }
    const phoneRegex = /^\+375 \d{2} \d{3} \d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Введите телефон в формате +375 XX XXX XXXX";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    console.log("Отправленные данные:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="contact-form-wrapper">
      <div className="container-fluid max-w-container">
        <div className="form-container">
          <h2 className="form-title text-center">
            Остались Вопросы? Напишите Нам!
          </h2>

          {isSubmitted ? (
            <div className="form-success-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-check-circle text-accent mb-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>
              <h3>Сообщение отправлено!</h3>
              <p>Наш менеджер свяжется с вами в течение часа.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="custom-contact-form">
              <div className="row">
                <div className="col-12 form-group">
                  <label className="form-label">Имя</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control custom-input"
                    placeholder="Ваше имя"
                    required
                  />
                </div>

                <div className="col-md-6 form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control custom-input ${errors.email ? "is-invalid" : ""}`}
                    placeholder="your@email.com"
                    required
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`form-control custom-input ${errors.phone ? "is-invalid" : ""}`}
                    placeholder="+375 25 123 4567"
                    required
                  />
                  {errors.phone && (
                    <span className="error-text">{errors.phone}</span>
                  )}
                </div>

                <div className="col-12 form-group">
                  <label className="form-label">Тема</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control custom-input"
                    placeholder="Тема сообщения"
                    required
                  />
                </div>

                <div className="col-12 form-group">
                  <label className="form-label">Сообщение</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control custom-input custom-textarea"
                    placeholder="Ваше сообщение..."
                    rows={5}
                    required
                  ></textarea>
                </div>

                <div className="col-12 mt-2">
                  <button type="submit" className="submit-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-send"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                    </svg>
                    Отправить сообщение
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
