import { FaCertificate, FaUserCheck } from 'react-icons/fa';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section id="certifications" className={`py-5 ${styles.certificationsSection}`}>
      <div className="container">
        <h2 className={`text-center mb-5 ${styles.sectionTitle}`}>Certifications & Engagements</h2>
        <div className="row justify-content-center">

          <div className="col-md-6 mb-4">
            <div className={`card ${styles.card}`}>
              <div className={`card-body text-center ${styles.cardBody}`}>
                <FaUserCheck className={styles.icon} />
                <h5 className="card-title mt-3">TeamViewer Community Member</h5>
                <p className="card-text">Reconnaissance officielle pour ma contribution active à la communauté TeamViewer (2023 - 2025).</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card ${styles.card}`}>
              <div className={`card-body text-center ${styles.cardBody}`}>
                <FaCertificate className={styles.icon} />
                <h5 className="card-title mt-3">Certification Cisco CCNA</h5>
                <p className="card-text">Actuellement en préparation, acquisition de compétences approfondies en réseaux informatiques et cybersécurité.</p>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center">
            <a href="#contact" className={`btn btn-primary ${styles.ctaButton}`}>En savoir plus</a>
          </div>

        </div>
      </div>
    </section>
  );
}