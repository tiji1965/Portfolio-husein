import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`text-center ${styles.heroSection}`}>
      <div className="container">
        <h1 className={styles.heroTitle}>Husein Tijani</h1>
        <p className={styles.heroSubtitle}>Étudiant en Réseaux et Cybersécurité</p>
        <a href="#contact" className={`btn ${styles.heroButton}`}>Me contacter</a>
      </div>
    </section>
  );
}
