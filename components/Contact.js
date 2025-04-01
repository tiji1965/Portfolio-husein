import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`py-5 ${styles.contactSection}`}>
      <div className="container">
        <h2 className={`text-center mb-5 ${styles.sectionTitle}`}>Me contacter</h2>
        <form
          action="https://formspree.io/f/xnnpzewp"
          method="POST"
          className={styles.contactForm}
        >
          <div className="mb-4">
            <label htmlFor="name" className="form-label">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`form-control ${styles.formControl}`}
              placeholder="Votre nom complet"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`form-control ${styles.formControl}`}
              placeholder="votre.email@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className={`form-control ${styles.formControl}`}
              placeholder="Écrivez votre message ici..."
            />
          </div>

          <div className="text-center">
            <button type="submit" className={`btn btn-primary ${styles.btnPrimary}`}>
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
