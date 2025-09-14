import React from 'react';

// The component now accepts `isDarkMode` to handle text color inversion
const Header = ({ onNavClick, onHelplinesClick, activePage, isDarkMode }) => {
  const styles = {
    headerContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: 'var(--card-bg-color)',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      zIndex: 1000,
      boxSizing: 'border-box',
    },
    companyName: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: 'var(--primary-color)',
    },
    navLinks: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      gap: '30px',
    },
    navLink: {
      cursor: 'pointer',
      color: 'var(--text-color)',
      textDecoration: 'none',
      fontSize: '12pt',
      transition: 'color 0.3s, border-bottom 0.3s',
      paddingBottom: '5px',
      borderBottom: '2px solid transparent',
    },
    activeNavLink: {
      cursor: 'pointer',
      fontSize: '12pt',
      transition: 'color 0.3s, border-bottom 0.3s',
      paddingBottom: '5px',
      color: 'var(--primary-color)',
      fontWeight: 'bold',
      borderBottom: `2px solid var(--accent-color)`,
    },
    actionsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    helplinesButton: {
      cursor: 'pointer',
      padding: '8px 15px',
      backgroundColor: 'var(--accent-color)',
      // Text color inverts correctly in dark mode
      color: isDarkMode ? 'var(--background-color)' : 'white', 
      border: '1px solid var(--accent-color)',
      borderRadius: '20px',
      fontSize: '11pt',
      transition: 'background-color 0.3s, color 0.3s',
    },
  };

  // The hover handler now also accounts for dark mode when inverting colors
  const handleButtonHover = (e, isOver) => {
    e.target.style.backgroundColor = isOver ? 'transparent' : 'var(--accent-color)';
    e.target.style.color = isOver ? 'var(--accent-color)' : (isDarkMode ? 'var(--background-color)' : 'white');
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.companyName}>SAHAY</div>
      
      <nav style={styles.navLinks}>
        <a style={activePage === 'home' ? styles.activeNavLink : styles.navLink} onClick={() => onNavClick('home')}>Home</a>
        <a style={activePage === 'library' ? styles.activeNavLink : styles.navLink} onClick={() => onNavClick('library')}>Library</a>
        <a style={activePage === 'profile' ? styles.activeNavLink : styles.navLink} onClick={() => onNavClick('profile')}>Profile</a>
      </nav>

      <div style={styles.actionsContainer}>
        <button 
          style={styles.helplinesButton} 
          onClick={onHelplinesClick}
          onMouseOver={(e) => handleButtonHover(e, true)}
          onMouseOut={(e) => handleButtonHover(e, false)}
        >
          National Helplines
        </button>
        {/* Spacer for the theme toggle */}
        <div style={{width: '60px'}}></div>
      </div>
    </header>
  );
};

export default Header;