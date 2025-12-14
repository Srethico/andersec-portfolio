export default function WhatsAppButton() {
  const phone = "573132791203"; // tu número profesional (sin + ni espacios)
  const message = encodeURIComponent(
    "Hola Anderson, revisé tu portafolio y me gustaría conversar contigo sobre una oportunidad profesional."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path d="M16.001 2.999c-7.18 0-13.001 5.82-13.001 13 0 2.29.601 4.44 1.65 6.32L3 29l6.9-1.61c1.82.99 3.91 1.56 6.1 1.56 7.18 0 13-5.82 13-13s-5.82-13-12.999-13zm0 23.4c-1.95 0-3.86-.52-5.52-1.5l-.4-.23-4.09.96.97-3.98-.26-.41a10.77 10.77 0 01-1.66-5.71c0-5.97 4.86-10.83 10.83-10.83 5.96 0 10.82 4.86 10.82 10.83 0 5.96-4.86 10.82-10.82 10.82zm5.93-8.1c-.33-.16-1.96-.97-2.27-1.08-.31-.11-.54-.16-.77.16-.23.33-.88 1.08-1.08 1.3-.2.22-.4.25-.73.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.14-.66.14-.14.33-.4.5-.6.16-.2.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.16-.77-1.86-1.05-2.54-.28-.67-.57-.58-.77-.59l-.66-.01c-.23 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.22 2.32 3.55 5.62 4.97.79.34 1.41.54 1.89.69.79.25 1.5.21 2.07.13.63-.09 1.96-.8 2.24-1.57.28-.77.28-1.43.2-1.57-.08-.14-.31-.22-.64-.38z"/>
      </svg>
    </a>
  );
}
