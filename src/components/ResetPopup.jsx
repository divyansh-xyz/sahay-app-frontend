import React from 'react';

// This component accepts `isDarkMode` to correctly style its text and buttons
const ResetPopup = ({ onConfirm, onCancel, isDarkMode }) => {
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
      zIndex: 1010, // High z-index to appear above other content
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
      marginTop: 0,
      marginBottom: '10px',
    },
    message: {
      fontSize: '12pt',
      opacity: 0.9,
      marginBottom: '25px',
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
    confirmButton: {
      backgroundColor: 'var(--accent-color)',
      // Text color inverts correctly in dark mode for readability
      color: isDarkMode ? 'var(--background-color)' : 'white',
    },
    cancelButton: {
      backgroundColor: 'transparent',
      color: 'var(--primary-color)',
      border: `1px solid var(--primary-color)`,
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>Are you sure?</h2>
        <p style={styles.message}>All your progress and survey history will be permanently deleted. This action cannot be undone.</p>
        <div style={styles.buttonContainer}>
          <button style={{...styles.button, ...styles.cancelButton}} onClick={onCancel}>Cancel</button>
          <button style={{...styles.button, ...styles.confirmButton}} onClick={onConfirm}>Yes, Reset</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPopup;