import React from 'react';

const HappinessMeter = ({ hasTakenSurvey }) => {
  const styles = {
    container: { display: 'flex', alignItems: 'center', padding: '15px 30px', backgroundColor: 'rgba(0,0,0,0.05)' },
    meterContainer: { flex: 1, marginRight: '20px' },
    meterText: { margin: 0, color: 'var(--primary-color)', fontSize: '1.1em' },
    questionnaireButton: { display: 'flex', alignItems: 'center', cursor: 'pointer', background: 'none', border: 'none', color: 'var(--text-color)', padding: '5px' },
    icon: { width: '20px', height: '20px', marginRight: '8px', fill: 'currentColor' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.meterContainer}>
        {hasTakenSurvey ? (
          <p style={styles.meterText}>Your Happiness Meter: [Visual will go here]</p>
        ) : (
          <p style={styles.meterText}>Assess your mental health.</p>
        )}
      </div>
      <button style={styles.questionnaireButton} title="Take another questionnaire">
        <svg style={styles.icon} viewBox="0 0 24 24"><path d="M13.47,21.5C13.47,22.33 12.8,23 12,23C11.2,23 10.53,22.33 10.53,21.5V19.5H13.47V21.5M12,2C6.47,2 2,6.5 2,12C2,15.75 4.1,19.03 7.2,20.5L7.5,20.67V18.53C6.15,17.43 5.2,15.86 5.2,14C5.2,10.24 8.24,7.2 12,7.2C15.76,7.2 18.8,10.24 18.8,14C18.8,15.86 17.85,17.43 16.5,18.53V20.67L16.8,20.5C19.9,19.03 22,15.75 22,12C22,6.5 17.5,2 12,2M9.8,14C9.8,12.79 10.79,11.8 12,11.8C13.21,11.8 14.2,12.79 14.2,14C14.2,15.21 13.21,16.2 12,16.2C10.79,16.2 9.8,15.21 9.8,14Z" /></svg>
        Take another questionnaire
      </button>
    </div>
  );
};

export default HappinessMeter;

