import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kpyahbo", "template_u4h8a66", form.current, "fx2WGlGlg0V6M0PoJ")
      .then(() => {
        alert("Mensaje enviado 🚀");
        form.current.reset();
      })
      .catch(() => alert("Error enviando mensaje 😞"));
  };

  return (
    <section id="Contact" className="contact-wrapper">
      <div className="contact-card futurist">
        <h2 className="contact-title">Contáctame</h2>
        <p className="contact-description">Construyamos algo épico.</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Nombre completo" required className="contact-input"/>
          <input type="email" name="email" placeholder="Correo electrónico" required className="contact-input"/>
          <input type="text" name="title" placeholder="Asunto" required className="contact-input"/>
          <textarea name="message" placeholder="Mensaje..." required className="contact-textarea"></textarea>

          <button className="contact-btn" type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
