import { useEffect, useRef, useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const nameRef = useRef(null);
  const timerRef = useRef(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (isOpen) {
      nameRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setStatus("Sending...");

    timerRef.current = window.setTimeout(() => {
      setStatus("Received. I will reply within 24 hours.");
      event.currentTarget.reset();
    }, 700);
  };

  return (
    <div className={`modal${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
      <button className="modal-backdrop" onClick={onClose} aria-label="Close contact form" />

      <section className="modal-panel glass-card" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close contact form">
          x
        </button>

        <h2 id="contact-title">Project Inquiry</h2>
        <p>Share scope and timeline. I respond within 24 hours.</p>

        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="modal-name">Name</label>
          <input id="modal-name" name="name" type="text" required ref={nameRef} />

          <label htmlFor="modal-email">Email</label>
          <input id="modal-email" name="email" type="email" required />

          <label htmlFor="modal-details">Project Brief</label>
          <textarea id="modal-details" name="details" rows="4" required />

          <button type="submit" className="btn btn-primary">
            Send Brief
          </button>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </section>
    </div>
  );
}
