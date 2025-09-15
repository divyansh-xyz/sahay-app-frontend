import React from 'react';

const Header = ({ onNavClick, activePage, isDarkMode }) => {
  const styles = {
    headerContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: 'var(--card-bg-color)',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      zIndex: 1000,
      boxSizing: 'border-box',
    },
    companyName: {
      fontSize: '1.6em',
      fontWeight: 'bold',
      color: 'var(--primary-color)',
    },
    navLinks: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      gap: '40px',
    },
    navLink: {
      cursor: 'pointer',
      color: 'var(--text-color)',
      textDecoration: 'none',
      fontSize: '12pt',
      transition: 'all 0.3s',
      padding: '5px 10px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    activeNavLink: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '12pt',
      transition: 'all 0.3s',
      padding: '5px 10px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'var(--primary-color)',
      color: isDarkMode ? 'var(--background-color)' : 'white',
    },
    // --- CHANGE: A simple spacer on the right to maintain balance ---
    rightSpacer: {
        width: '80px', // Provides space for the fixed theme toggle
    }
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.companyName}>Sahay</div>
      
      <nav style={styles.navLinks}>
        <a style={activePage === 'dashboard' ? styles.activeNavLink : styles.navLink} onClick={() => onNavClick('dashboard')}>Dashboard</a>
        <a style={activePage === 'library' ? styles.activeNavLink : styles.navLink} onClick={() => onNavClick('library')}>Library</a>
        <a style={activePage === 'progress' ? styles.activeNavLink : styles.navLink} onClick={() => onNavClick('progress')}>Progress</a>
      </nav>

      {/* --- CHANGE: The profile icon div has been removed and replaced with a simple spacer --- */}
      <div style={styles.rightSpacer}></div>
    </header>
  );
};

export default Header;