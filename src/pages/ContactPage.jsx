import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const timerRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    // Replace with your actual Access Key from web3forms.com
    const ACCESS_KEY = "b0d95008-1085-432c-a900-2d468fc3c914";

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! I will reply soon.");
        event.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus("Failed to connect. Please check your internet.");
    }
  };

  return (
    <div className="route-page">
      <header className="route-header glass-card reveal">
        <p className="section-kicker">Contact</p>
        <h1>Contact</h1>
        <p>Open to internships, collaborative projects, and development opportunities.</p>
      </header>

      <section className="contact-grid">
        <article className="glass-card contact-card reveal">
          <h2>Work With Me</h2>
          <p>I am currently seeking internship or entry-level opportunities in web and mobile development. I’m open to collaborating on innovative projects and building scalable applications.</p>
          <div className="contact-meta">
            <p>Email: adithyajnair369@gmail.com</p>
            <p>Phone: +91 9995533576</p>
            <p>Location: Kerala, India</p>
            <p>Timezone: IST (UTC +05:30)</p>
            <p>GitHub: github.com/thepirate2004</p>
          </div>
        </article>

        <article className="glass-card contact-form-panel reveal">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={onSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" required />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" required />

            <label htmlFor="contact-details">Message</label>
            <textarea id="contact-details" name="details" rows="6" required />

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            <p className="form-status" aria-live="polite">{status}</p>
          </form>
        </article>
      </section>
    </div>
  );
}
