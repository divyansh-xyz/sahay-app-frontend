import React from 'react';

const SurveyPopup = ({ onAccept, onDecline }) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    popup: {
      backgroundColor: 'var(--card-bg-color)',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: 'var(--card-shadow)',
      maxWidth: '400px',
      width: '90%',
      textAlign: 'center',
    },
    title: {
      color: 'var(--primary-color)',
      marginBottom: '15px',
      fontSize: '1.5em',
    },
    message: {
      color: 'var(--text-color)',
      marginBottom: '25px',
      lineHeight: '1.5',
    },
    buttonContainer: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
    },
    acceptButton: {
      padding: '10px 20px',
      backgroundColor: 'var(--accent-color)',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1em',
    },
    declineButton: {
      padding: '10px 20px',
      backgroundColor: 'transparent',
      color: 'var(--text-color)',
      border: `1px solid var(--input-border-color)`,
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1em',
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>Welcome to SAHAY!</h2>
        <p style={styles.message}>
          Would you like to take a quick survey to help us understand your current emotional state?
          This will help us provide better support and resources.
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.acceptButton} onClick={onAccept}>
            Take Survey
          </button>
          <button style={styles.declineButton} onClick={onDecline}>
            Skip for Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPopup;