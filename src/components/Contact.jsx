import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState(""); // 👈 nuevo

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_kpyahbo",
        "template_u4h8a66",
        form.current,
        "fx2WGlGlg0V6M0PoJ"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="Contact" className="contact-wrapper">
      <div className="contact-card futurist">
        <h2 className="contact-title">Contáctame</h2>
        <p className="contact-description">Construyamos algo épico.</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="contact-input"
          />
          <input
            type="text"
            name="title"
            placeholder="Asunto"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Mensaje..."
            required
            className="contact-textarea"
          ></textarea>

          <button className="contact-btn" type="submit">
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* MENSAJES VISUALES */}
          {status === "success" && (
            <p className="contact-success">♠️ Mensaje enviado correctamente</p>
          )}

          {status === "error" && (
            <p className="contact-error">❌ Error al enviar el mensaje</p>
          )}
        </form>
      </div>
    </section>
  );
}
