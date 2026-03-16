/*
===========================================================
ABOUT.JSX — AnderSec Portfolio
Sección "Sobre mí"

Este componente muestra:
- Foto profesional
- Nombre
- Especialización
- Descripción profesional
- Botón para ver CV

Incluye animación al hacer scroll usando IntersectionObserver
===========================================================
*/

import { useEffect, useRef } from "react";
import "../styles/About.css";

export default function About() {

  /*
  ---------------------------------------------------------
  useRef
  Permite acceder al elemento DOM de la card
  ---------------------------------------------------------
  */
  const cardRef = useRef(null);

  /*
  ---------------------------------------------------------
  useEffect
  Detecta cuando la sección entra en pantalla
  y activa la animación agregando la clase "visible"
  ---------------------------------------------------------
  */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("visible");
        }
      },

      {
        threshold: 0.3
      }

    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (

    <section id="about" className="about-section">

      <div className="about-container">

        {/* =========================
            Título de la sección
        ========================= */}

        <h2 className="about-title">Sobre mí</h2>

        {/* =========================
            Card principal
        ========================= */}

        <div ref={cardRef} className="about-card">

          {/* =========================
              FOTO
          ========================= */}

          <div className="photo-wrapper">

            <img
              src="/logo.svg"
              alt="Anderson Ortiz"
              className="photo"
            />

          </div>

          {/* =========================
              CONTENIDO TEXTO
          ========================= */}

          <div className="text-content">

            <h3 className="name">
              Anderson Ortiz Muñoz
            </h3>

            <p className="role">
              Ingeniero de Sistemas • Ciberseguridad • Backend • DevOps
            </p>

            <p className="description">
              Ingeniero de Sistemas especializado en desarrollo backend,
              arquitectura de software y ciberseguridad. Experiencia en
              desarrollo de aplicaciones seguras, automatización de
              infraestructuras y diseño de soluciones tecnológicas
              escalables orientadas a entornos empresariales.
            </p>

            {/* =========================
                BOTÓN CV
            ========================= */}

            <a
              href="/CV-Anderson-Ortiz-Muñoz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
            >
              Ver CV
            </a>

          </div>

        </div>

      </div>

    </section>

  );

}