import React from 'react';
// Using relative import paths
import sahayLogoLight from '../assets/sahay-logo-light.png';
import sahayLogoDark from '../assets/sahay-logo-dark.png';

const OtpPage = ({ isDarkMode, onSuccessfulVerification }) => {
  const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', },
    card: { padding: '40px', borderRadius: '12px', backgroundColor: 'var(--card-bg-color)', boxShadow: 'var(--card-shadow)', width: '100%', maxWidth: '450px', textAlign: 'center', },
    logo: { width: '100px', },
    sahayText: { color: '#FFFFFF', fontSize: '1.6em', letterSpacing: '0.4em', margin: '10px 0 20px 0', fontWeight: 'normal', fontFamily: "'Times New Roman', Times, serif", },
    title: { color: 'var(--primary-color)', marginBottom: '10px', fontSize: '24pt', fontFamily: "'Times New Roman', Times, serif" },
    subtitle: { marginBottom: '30px', color: 'var(--text-color)', opacity: 0.8, fontFamily: "'Times New Roman', Times, serif", fontSize: '12pt' },
    input: { width: 'calc(100% - 22px)', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid var(--input-border-color)', fontFamily: "'Times New Roman', Times, serif", fontSize: '1.2em', textAlign: 'center', letterSpacing: '0.2em', backgroundColor: 'transparent', color: 'var(--text-color)' },
    submitButton: { width: '100%', padding: '12px', backgroundColor: 'var(--accent-color)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1em', marginTop: '10px', fontFamily: "'Times New Roman', Times, serif" },
    resendLink: { marginTop: '20px', fontSize: '12pt', color: 'var(--text-color)', fontFamily: "'Times New Roman', Times, serif" },
    linkAnchor: { color: 'var(--accent-color)', textDecoration: 'underline', cursor: 'pointer' }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // This prop call triggers the login state change in App.js
    if (onSuccessfulVerification) {
      onSuccessfulVerification();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={isDarkMode ? sahayLogoDark : sahayLogoLight} alt="SAHAY Logo" style={styles.logo} />
        {isDarkMode ? (<h2 style={styles.sahayText}>SAHAY</h2>) : (<div style={{ height: '53.6px', marginBottom: '20px' }}></div>)}
        <h1 style={styles.title}>Verification</h1>
        <p style={styles.subtitle}>Enter the OTP sent to your mobile number.</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="- - - - - -" style={styles.input} maxLength="6" required />
          <button type="submit" style={styles.submitButton}>Verify & Sign Up</button>
        </form>
        <p style={styles.resendLink}>
          Didn't receive the code? <a style={styles.linkAnchor}>Resend OTP</a>
        </p>
      </div>
    </div>
  );
};

export default OtpPage;

