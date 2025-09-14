import React from 'react';

// The component now accepts the `activePage` prop to know which link to highlight
const Header = ({ onNavClick, onHelplinesClick, activePage }) => {
  const styles = {
    headerContainer: {
      position: 'fixed', // This keeps the header at the top of the screen when scrolling
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
      paddingBottom: '5px', // Space for the line
      borderBottom: '2px solid transparent', // Prevents content jump on hover/active
    },
    // This is the new style for the currently active navigation link
    activeNavLink: {
      cursor: 'pointer',
      fontSize: '12pt',
      transition: 'color 0.3s, border-bottom 0.3s',
      paddingBottom: '5px',
      color: 'var(--primary-color)', // Highlighted text color
      borderBottom: `2px solid var(--accent-color)`, // The visible red line
    },
    actionsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    helplinesButton: {
      cursor: 'pointer',
      padding: '8px 15px',
      backgroundColor: 'transparent',
      border: '1px solid var(--accent-color)',
      color: 'var(--accent-color)',
      borderRadius: '20px',
      fontSize: '11pt',
      transition: 'background-color 0.3s, color 0.3s',
    },
  };

  const handleButtonHover = (e, isOver) => {
    e.target.style.backgroundColor = isOver ? 'var(--accent-color)' : 'transparent';
    e.target.style.color = isOver ? 'white' : 'var(--accent-color)';
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.companyName}>SAHAY</div>
      
      <nav style={styles.navLinks}>
        {/* Each link now checks if it's the active page and applies the correct style */}
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
        {/* This spacer provides room for the fixed-position theme toggle */}
        <div style={{width: '60px'}}></div>
      </div>
    </header>
  );
};

export default Header;

