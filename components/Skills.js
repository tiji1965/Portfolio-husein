import { FaNetworkWired, FaServer, FaDatabase, FaShieldAlt, FaLaptopCode, FaPython, FaBug, FaSitemap } from 'react-icons/fa';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`py-5 ${styles.skillsSection}`}>
      <div className="container">
        <h2 className={`text-center ${styles.sectionTitle}`}>Compétences Techniques</h2>
        <div className="row">
          <SkillCard icon={<FaNetworkWired />} title="Réseautique" description="Cisco (CCNA), VLAN, VPN, routage et commutation" />
          <SkillCard icon={<FaServer />} title="Systèmes" description="Windows Server (AD, DNS, DHCP), Linux (Ubuntu, Debian)" />
          <SkillCard icon={<FaDatabase />} title="Base de données" description="SQL Server, MySQL" />
          <SkillCard icon={<FaShieldAlt />} title="Sécurité" description="Pare-feux (pfSense, OPNsense)" />
          <SkillCard icon={<FaLaptopCode />} title="Virtualisation" description="VMware, VirtualBox, Proxmox" />
          <SkillCard icon={<FaPython />} title="Programmation/Scripting" description="Python, Bash, PowerShell" />
          <SkillCard icon={<FaBug />} title="Outils de pentesting" description="Kali Linux, Metasploit, nmap" />
          <SkillCard icon={<FaSitemap />} title="Analyse réseau" description="Wireshark" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="col-md-3 mb-4">
      <div className={`card h-100 ${styles.card}`}>
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.cardIcon}>{icon}</div>
          <h5 className={styles.cardTitle}>{title}</h5>
          <p className={styles.cardText}>{description}</p>
        </div>
      </div>
    </div>
  );
}