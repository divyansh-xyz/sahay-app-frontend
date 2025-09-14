import React, { useState } from 'react';
// --- FIX: Corrected the import path to be relative ---
import sahayLogoDark from '../assets/sahay-logo-dark.png';

const SignUpPage = ({ isDarkMode, quote, onContinue, onSwitchToSignIn }) => {
  const [userType, setUserType] = useState('student');

  const styles = {
    // --- CHANGE: logoContainer style is removed ---
    logo: {
      width: '120px',
      display: 'block', // Treat the image as a block element
      margin: '0 auto', // Apply automatic horizontal margins to center it
      marginBottom: '10px',
    },
    sahayText: {
      color: isDarkMode ? '#FFFFFF' : 'var(--primary-color)',
      fontSize: '1.6em',
      letterSpacing: '0.4em',
      fontWeight: 'normal',
      fontFamily: "'Times New Roman', Times, serif",
      marginBottom: '20px', // Added margin to space it from the title below
    },
    // ... other styles remain the same
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' },
    card: { padding: '40px', borderRadius: '12px', backgroundColor: 'var(--card-bg-color)', boxShadow: 'var(--card-shadow)', width: '100%', maxWidth: '450px', textAlign: 'center' },
    title: { color: 'var(--primary-color)', marginBottom: '10px' },
    quoteText: { color: 'var(--text-color)', fontStyle: 'italic', opacity: 0.9, marginBottom: '25px', fontSize: '12pt', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    toggleContainer: { display: 'flex', justifyContent: 'center', marginBottom: '25px', border: `1px solid var(--primary-color)`, borderRadius: '30px', overflow: 'hidden' },
    toggleButton: { padding: '10px 20px', border: 'none', cursor: 'pointer', flex: 1, backgroundColor: 'transparent', color: 'var(--primary-color)', fontFamily: "'Times New Roman', Times, serif", fontSize: '12pt' },
    activeToggleButton: { backgroundColor: 'var(--primary-color)', color: 'white' },
    input: { width: 'calc(100% - 22px)', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid var(--input-border-color)', fontFamily: "'Times New Roman', Times, serif", fontSize: '12pt', backgroundColor: 'transparent', color: 'var(--text-color)' },
    fileInputLabel: { display: 'block', textAlign: 'left', marginBottom: '5px', color: 'var(--text-color)', fontSize: '0.9em', paddingLeft: '5px' },
    submitButton: { width: '100%', padding: '12px', backgroundColor: 'var(--accent-color)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1em', marginTop: '10px' },
    switchLink: { marginTop: '20px', color: 'var(--text-color)', cursor: 'pointer' },
    linkAnchor: { color: 'var(--accent-color)', textDecoration: 'underline' }
  };
  
  const handleFormSubmit = (e) => { e.preventDefault(); if (onContinue) onContinue(); };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* --- CHANGE: The wrapping logoContainer div is removed --- */}
        <img src={sahayLogoDark} alt="SAHAY Logo" style={styles.logo} />
        <h2 style={styles.sahayText}>SAHAY</h2>
        
        <h1 style={styles.title}>Create Your Account</h1>
        <p style={styles.quoteText}>"{quote}"</p>

        {/* ... rest of the component remains the same ... */}
        <div style={styles.toggleContainer}>
          <button style={userType === 'student' ? {...styles.toggleButton, ...styles.activeToggleButton} : styles.toggleButton} onClick={() => setUserType('student')}>I am a Student</button>
          <button style={userType === 'volunteer' ? {...styles.toggleButton, ...styles.activeToggleButton} : styles.toggleButton} onClick={() => setUserType('volunteer')}>I am a Volunteer</button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Full Name" style={styles.input} required />
          <input type="email" placeholder="Email Address" style={styles.input} required />
          <input type="tel" placeholder="Mobile No." style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          {userType === 'volunteer' && (
            <>
              <div><label style={styles.fileInputLabel} htmlFor="studentId">Upload Student ID:</label><input type="file" id="studentId" style={styles.input} required /></div>
              <div><label style={{...styles.fileInputLabel, marginTop: '10px'}} htmlFor="approvalLetter">Upload Letter of Approval:</label><input type="file" id="approvalLetter" style={styles.input} required /></div>
            </>
          )}
          <button type="submit" style={styles.submitButton}>Continue</button>
        </form>
        <p style={styles.switchLink} onClick={onSwitchToSignIn}>
          Already have an account? <a style={styles.linkAnchor}>Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;