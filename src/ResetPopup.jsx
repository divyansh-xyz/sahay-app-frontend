import React from 'react';

const ResetPopup = ({ onConfirm, onCancel }) => {
  const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 },
    popup: { backgroundColor: 'var(--card-bg-color)', padding: '30px 40px', borderRadius: '12px', textAlign: 'center', width: '100%', maxWidth: '400px' },
    title: { color: 'var(--primary-color)', marginBottom: '15px' },
    warningText: { color: 'var(--text-color)', marginBottom: '30px' },
    buttonContainer: { display: 'flex', justifyContent: 'space-around' },
    button: { padding: '10px 25px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1em' },
    confirmButton: { backgroundColor: 'var(--accent-color)', color: 'white' },
    cancelButton: { backgroundColor: 'transparent', border: '1px solid var(--primary-color)', color: 'var(--primary-color)' },
  };
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>Are you absolutely sure?</h2>
        <p style={styles.warningText}>This action cannot be undone. All your progress and survey history will be permanently deleted.</p>
        <div style={styles.buttonContainer}>
          <button style={{...styles.button, ...styles.cancelButton}} onClick={onCancel}>Cancel</button>
          <button style={{...styles.button, ...styles.confirmButton}} onClick={onConfirm}>Yes, Reset Progress</button>
        </div>
      </div>
    </div>
  );
};
export default ResetPopup;

