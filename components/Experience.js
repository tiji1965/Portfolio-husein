import Image from 'next/image';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={`py-5 ${styles.experienceSection}`}>
      <div className="container">
        <h2 className={`text-center ${styles.experienceTitle}`}>Expérience Académique</h2>

        <div className={styles.experienceGrid}>
          <div className={styles.experienceItem}>
            <Image src="/images/experiences/bases-de-donnees.jpg" fill style={{ objectFit: 'cover' }} alt="Bases de données" />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h3>Gestion de bases de données</h3>
              <p>Conception et gestion de bases de données (SQL, XML).</p>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <Image src="/images/experiences/programmation-client-serveur.jpg" fill style={{ objectFit: 'cover' }} alt="Programmation client-serveur" />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h3>Programmation client-serveur</h3>
              <p>Applications dynamiques JavaScript, Python, PHP.</p>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <Image src="/images/experiences/administration-windows-cisco.jpg" fill style={{ objectFit: 'cover' }} alt="Serveurs Windows & Cisco" />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h3>Administration Windows & Cisco</h3>
              <p>Installation et sécurisation de serveurs Windows et équipements Cisco.</p>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <Image src="/images/experiences/virtualisation-reseaux.jpg" fill style={{ objectFit: 'cover' }} alt="Virtualisation & réseaux" />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h3>Virtualisation et Réseaux</h3>
              <p>Virtualisation Linux, réseaux VOIP.</p>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <Image src="/images/experiences/securite-piratage.jpg" fill style={{ objectFit: 'cover' }} alt="Sécurité informatique" />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h3>Sécurité & piratage éthique</h3>
              <p>Prévention et réponse aux menaces informatiques.</p>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <Image src="/images/experiences/ingenierie-reseau-cisco.jpg" fill style={{ objectFit: 'cover' }} alt="Ingénierie réseau Cisco" />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h3>Administration réseau Cisco</h3>
              <p>Configuration avancée de routeurs et VLANs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
