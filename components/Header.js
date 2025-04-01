import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.header}`}>
      <div className="container">
        <Link href="/" passHref>
          <Image
            src="/images/logo.jpg"
            alt="Husein Tijani"
            width={250}
            height={100}
            className={styles.logoImage}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`}> 
          <ul className="navbar-nav">
            {['about', 'skills', 'projects', 'certifications', 'experience', 'contact'].map((section) => (
              <li key={section} className="nav-item">
                <Link href={`#${section}`} className={`nav-link ${styles.navLink}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}