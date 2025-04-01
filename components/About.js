import Image from 'next/image';
import styles from './About.module.css';
import { FaNetworkWired, FaShieldAlt, FaServer, FaCode, FaDatabase } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className={`${styles.aboutSection} py-5 px-3 px-md-5`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} text-center mb-5`}>À propos de moi</h2>
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
            <div className={styles.imageWrapper}>
              <Image
                src="/images/profile.jpg"
                alt="Husein Tijani"
                width={300}
                height={300}
                className={`${styles.profileImage} rounded-circle`}
              />
              <div className={styles.statusBadge}>🚀 Étudiant motivé</div>
            </div>
          </div>
          <div className="col-lg-8">
            <p className={`${styles.intro} lead`}>
              <span className={styles.highlight}>Salut ! Je suis Husein</span>, étudiant en <strong>Réseaux & Cybersécurité</strong> au Cégep de Saint-Hyacinthe. Ce qui m'anime ? <em>Décrypter les architectures réseau</em> et <em>protéger les systèmes d'information</em> 🛡️
            </p>
            <div className={styles.studentFocus}>
              <h3>Ce qui me motive :</h3>
              <ul>
                <li>🛠️ Résoudre des cas pratiques en laboratoire réseau</li>
                <li>📈 Analyser les vulnérabilités d'un système informatique</li>
                <li>💡 Participer à des projets d'équipe sur des infrastructures réseaux</li>
              </ul>
            </div>
            </div>
          <div className="col-lg-12 mt-4">
            <div className={`${styles.skillsCard} card`}>
              <div className="card-body">
                <h5 className="card-title">Mes Armes Secrètes :</h5>
                <div className="row">
                  <div className="col-md-6">
                    <SkillItem icon={<FaNetworkWired />} title="Réseaux">
                      Configuration Cisco, VLANs, Routing, PFSense<br/>
                      <em>VPN, Nating, FreePBX</em>
                    </SkillItem>
                  </div>
                  <div className="col-md-6">
                    <SkillItem icon={<FaShieldAlt />} title="Sécurité">
                      Pentesting basique, Kali, Wireshark, Nmap<br/>
                      <em>Firewall, Windows Defender</em>
                    </SkillItem>
                  </div>
                  <div className="col-md-6">
                    <SkillItem icon={<FaDatabase />} title="Bases de Données">
                      MySQL, MS SQL Server<br/>
                      <em>Optimisation de requêtes SQL</em>
                    </SkillItem>
                  </div>
                  <div className="col-md-6">
                    <SkillItem icon={<FaServer />} title="Serveurs">
                      Virtualisation VMware, Proxmox, Windows Server<br/>
                      <em>Ubuntu server, Azure</em>
                    </SkillItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SkillItem = ({ icon, title, children }) => (
  <div className={styles.skillItem}>
    <div className={styles.skillIcon}>{icon}</div>
    <div>
      <h6>{title}</h6>
      <p>{children}</p>
    </div>
  </div>
);
