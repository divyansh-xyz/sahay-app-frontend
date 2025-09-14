import React from 'react';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  const styles = {
    toggleContainer: {
      position: 'fixed',
      top: '15px',
      right: '20px',
      zIndex: 1001,
    },
    toggleButton: {
      backgroundColor: isDarkMode ? '#5a9a9d' : '#e0ddae', // Track color
      border: `2px solid var(--primary-color)`,
      borderRadius: '30px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      width: '60px',
      height: '30px',
      padding: '3px',
      position: 'relative',
      transition: 'background-color 0.4s ease',
    },
    thumb: {
      backgroundColor: 'white', // The moving circle
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.4s ease',
      // Move the thumb to the right when in dark mode
      transform: isDarkMode ? 'translateX(30px)' : 'translateX(0px)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    icon: {
      width: '16px',
      height: '16px',
      transition: 'opacity 0.2s ease, transform 0.4s ease',
    }
  };

  // Logic to show/hide icons
  const sunStyle = {
    ...styles.icon,
    opacity: isDarkMode ? 0 : 1,
    transform: isDarkMode ? 'rotate(90deg)' : 'rotate(0deg)',
  };

  const moonStyle = {
    ...styles.icon,
    opacity: isDarkMode ? 1 : 0,
    transform: isDarkMode ? 'rotate(0deg)' : 'rotate(-90deg)',
  };

  return (
    <div style={styles.toggleContainer}>
      <button onClick={onToggle} style={styles.toggleButton} title="Toggle Theme">
        <div style={styles.thumb}>
          {/* Sun SVG */}
          <svg style={sunStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d7340b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          {/* Moon SVG */}
          <svg style={moonStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#336467" stroke="#336467" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
