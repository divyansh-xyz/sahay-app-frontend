import React from 'react';

// This component accepts the `isDarkMode` status to correctly style its buttons
const SurveyPopup = ({ onAccept, onDecline, isDarkMode }) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    popup: {
      backgroundColor: 'var(--card-bg-color)',
      padding: '30px 40px',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
      // Ensures all text inside the pop-up uses the correct theme color
      color: 'var(--text-color)',
    },
    title: {
      color: 'var(--primary-color)',
      marginBottom: '25px',
      fontSize: '1.4em',
      lineHeight: '1.4',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    button: {
      padding: '10px 25px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1em',
      fontFamily: "'Times New Roman', Times, serif",
    },
    acceptButton: {
      backgroundColor: 'var(--primary-color)',
      // Text color inverts correctly in dark mode for readability
      color: isDarkMode ? 'var(--background-color)' : 'white',
    },
    declineButton: {
      backgroundColor: 'transparent',
      color: 'var(--accent-color)',
      border: `1px solid var(--accent-color)`,
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>Wanna answer a quick questionnaire and assess your mental health?</h2>
        <div style={styles.buttonContainer}>
          <button style={{...styles.button, ...styles.declineButton}} onClick={onDecline}>
            Let's do it later
          </button>
          <button style={{...styles.button, ...styles.acceptButton}} onClick={onAccept}>
            Sure!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPopup;