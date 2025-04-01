import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`py-4 text-center ${styles.footer}`}>
      <div className="container">
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Husein Tijani - Tous droits réservés.
        </p>
        <div className={styles.socialIcons}>
          <a href="tel:+15794894448" className={styles.icon} aria-label="Téléphone">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a href="mailto:tijanihusein23@gmail.com" className={styles.icon} aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://linkedin.com/in/husein-tijani" className={styles.icon} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
}
