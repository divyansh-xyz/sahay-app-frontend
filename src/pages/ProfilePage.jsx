import React, { useState } from 'react';
// --- FIX: Using correct relative import path ---
import ResetPopup from '../components/ResetPopup.jsx';

const dummyGraphData = [
  { question: 'Q1: Mood', value: 7 }, { question: 'Q2: Sleep', value: 5 },
  { question: 'Q3: Focus', value: 8 }, { question: 'Q4: Social', value: 6 },
  { question: 'Q5: Anxiety', value: 4 }
];

const ProfilePage = () => {
  const [showResetPopup, setShowResetPopup] = useState(false);

  const handleResetProgress = () => {
    console.log("Calling API to reset user progress...");
    setShowResetPopup(false);
  };
  
  const styles = {
    container: { padding: '30px' },
    title: { color: 'var(--primary-color)', textAlign: 'center', fontSize: '2em', marginBottom: '40px' },
    section: { marginBottom: '50px' },
    sectionTitle: { color: 'var(--primary-color)', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px', marginBottom: '20px' },
    graphContainer: { display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '250px', borderLeft: '2px solid var(--text-color)', borderBottom: '2px solid var(--text-color)', padding: '10px' },
    bar: { width: '50px', backgroundColor: 'var(--primary-color)', textAlign: 'center', color: 'white', position: 'relative' },
    barLabel: { position: 'absolute', bottom: '-25px', width: '100%', textAlign: 'center' },
    analysisText: { lineHeight: '1.6' },
    resetButton: { display: 'flex', alignItems: 'center', background: 'none', border: `1px solid var(--accent-color)`, color: 'var(--accent-color)', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', float: 'right' },
    icon: { width: '20px', height: '20px', marginRight: '8px', fill: 'currentColor' },
  };

  return (
    <div style={styles.container}>
      {showResetPopup && <ResetPopup onConfirm={handleResetProgress} onCancel={() => setShowResetPopup(false)} />}
      
      <h1 style={styles.title}>Your Wellness Profile</h1>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Your Progress</h2>
        <div style={styles.graphContainer}>
          {dummyGraphData.map(item => (
            <div key={item.question} style={{...styles.bar, height: `${item.value * 20}px`}} title={`${item.question}: Score ${item.value}`}>
              {item.value}
              <div style={styles.barLabel}>{item.question}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={styles.section}>
        <button style={styles.resetButton} onClick={() => setShowResetPopup(true)}>
            <svg style={styles.icon} viewBox="0 0 24 24"><path d="M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M12,18C8.69,18 6,15.31 6,12C6,8.69 8.69,6 12,6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M12.5,8H11V13L15.25,15.5L16,14.25L12.5,12.25V8Z" /></svg>
            Reset Your Progress
        </button>
        <h2 style={styles.sectionTitle}>Analysis</h2>
        <p style={styles.analysisText}>
          This is where a detailed, AI-generated analysis of the user's graph will appear. It will compare their scores over time, highlight areas of improvement, and identify patterns in their responses. This text is a placeholder until the real data and AI logic are connected.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;

