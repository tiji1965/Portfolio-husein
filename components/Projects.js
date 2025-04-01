import Image from 'next/image';
import { useState } from 'react';
import styles from './Projects.module.css';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Réseau LAN sécurisé – 2024',
      description: 'Projet académique incluant la configuration complète d’un réseau sécurisé utilisant VLANs, VPN et pfSense comme pare-feu.',
      image: '/images/projects/lan-securise.jpg',
    },
    {
      id: 2,
      title: "Déploiement d'un serveur web – 2024",
      description: 'Hébergement sécurisé d’un site sous Windows Server et Linux, avec une sécurisation poussée (SSL, pare-feu et gestion d’accès).',
      image: '/images/projects/serveur-web.jpg',
    },
    {
      id: 3,
      title: 'Base de données SQL Server sur Azure avec interface PHP – 2024',
      description: "Conception et déploiement d'une base de données SQL Server sur Microsoft Azure, associée à un site web en PHP permettant d'enregistrer les humeurs des utilisateurs selon leur localisation.",
      image: '/images/projects/sql-server-azure.jpg',
    },
  ];

  return (
    <section id="projects" className={`py-5 ${styles.projectsSection}`}>
      <div className="container">
        <h2 className={`text-center mb-5 ${styles.sectionTitle}`}>Projets Réalisés</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <div className={`card shadow ${styles.projectCard}`} onClick={() => setSelectedImage(project.image)}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.projectImage}
                  />
                </div>
                <div className="card-body">
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <button className={`btn ${styles.projectButton}`}>Me contacter</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className={styles.modalBackdrop} onClick={() => setSelectedImage(null)}>
            <div className={styles.modalContent}>
              <Image src={selectedImage} alt="Projet" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}