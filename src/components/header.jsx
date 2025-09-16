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
      backgroundColor: 'var(--primary-color)',
      color: isDarkMode ? 'var(--background-color)' : 'white',
    },
    actionsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    // --- NEW: Style for the "Share" button ---
    navLinkAction: {
      cursor: 'pointer',
      color: 'var(--text-color)',
      textDecoration: 'none',
      fontSize: '12pt',
      transition: 'all 0.3s',
      padding: '8px 15px', // Slightly larger padding
      borderRadius: '20px',
      border: '1px solid transparent',
    },
    // --- NEW: Active style with the green highlight ---
    activeNavLinkGreen: {
      backgroundColor: 'var(--active-green)',
      color: isDarkMode ? '#1b242a' : 'white', // Ensure high contrast text
      borderColor: 'var(--active-green)',
    },
    rightSpacer: {
      width: '80px',
    }
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.companyName}>Sahay</div>
      
      <nav style={styles.navLinks}>
        {/* The active style for these links remains the primary color */}
        <a style={{...styles.navLink, ...(activePage === 'dashboard' && styles.activeNavLink)}} onClick={() => onNavClick('dashboard')}>Dashboard</a>
        <a style={{...styles.navLink, ...(activePage === 'library' && styles.activeNavLink)}} onClick={() => onNavClick('library')}>Library</a>
        <a style={{...styles.navLink, ...(activePage === 'progress' && styles.activeNavLink)}} onClick={() => onNavClick('progress')}>Progress</a>
      </nav>

      <div style={styles.actionsContainer}>
        {/* --- NEW: The "Share What's on Your Mind" button --- */}
        {/* It uses the new green style when its page is active */}
        <a 
          style={{...styles.navLinkAction, ...(activePage === 'share' && styles.activeNavLinkGreen)}} 
          onClick={() => onNavClick('share')}
        >
          Share What's on Your Mind
        </a>
        <div style={styles.rightSpacer}></div>
      </div>
    </header>
  );
};

export default Header;