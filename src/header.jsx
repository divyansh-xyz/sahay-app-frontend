import React from 'react';

const Header = ({ onNavClick, onHelplinesClick }) => {
  const styles = {
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', backgroundColor: 'var(--card-bg-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
    companyName: { fontSize: '1.8em', fontWeight: 'bold', color: 'var(--primary-color)', letterSpacing: '0.2em' },
    nav: { display: 'flex', gap: '30px' },
    navLink: { cursor: 'pointer', fontSize: '1.1em', color: 'var(--text-color)' },
    helplinesButton: { padding: '8px 15px', border: `1px solid var(--accent-color)`, color: 'var(--accent-color)', backgroundColor: 'transparent', borderRadius: '8px', cursor: 'pointer' },
  };

  return (
    <header style={styles.header}>
      <div style={styles.companyName}>SAHAY</div>
      <nav style={styles.nav}>
        <a style={styles.navLink} onClick={() => onNavClick('home')}>Home</a>
        <a style={styles.navLink} onClick={() => onNavClick('library')}>Library</a>
        <a style={styles.navLink} onClick={() => onNavClick('profile')}>Profile</a>
      </nav>
      <button style={styles.helplinesButton} onClick={onHelplinesClick}>National Helplines</button>
    </header>
  );
};

export default Header;

