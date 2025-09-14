import React from 'react';
// --- FIX: Using the correct relative path for the image import ---
import sahayLogoDark from '../assets/sahay-logo-dark.png';

const SignInPage = ({ isDarkMode, onSwitchToSignUp, onSuccessfulLogin }) => {
  const styles = {
    // --- All style changes are identical to the SignUpPage centering fix ---
    logo: {
      width: '120px',
      display: 'block',
      margin: '0 auto',
      marginBottom: '10px',
    },
    sahayText: {
      color: isDarkMode ? '#FFFFFF' : 'var(--primary-color)',
      fontSize: '1.6em',
      letterSpacing: '0.4em',
      fontWeight: 'normal',
      fontFamily: "'Times New Roman', Times, serif",
      marginBottom: '20px',
    },
    // Other styles remain unchanged
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' },
    card: { padding: '40px', borderRadius: '12px', backgroundColor: 'var(--card-bg-color)', boxShadow: 'var(--card-shadow)', width: '100%', maxWidth: '450px', textAlign: 'center' },
    title: { color: 'var(--primary-color)', marginBottom: '30px' },
    input: { width: 'calc(100% - 22px)', padding: '12px', marginBottom: '20px', borderRadius: '5px', border: '1px solid var(--input-border-color)', fontFamily: "'Times New Roman', Times, serif", fontSize: '12pt', backgroundColor: 'transparent', color: 'var(--text-color)' },
    submitButton: { width: '100%', padding: '12px', backgroundColor: 'var(--accent-color)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1em', marginTop: '10px' },
    switchLink: { marginTop: '20px', color: 'var(--text-color)', cursor: 'pointer' },
    linkAnchor: { color: 'var(--accent-color)', textDecoration: 'underline' }
  };

  const handleFormSubmit = (e) => { e.preventDefault(); onSuccessfulLogin(); };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* --- The extra container div has been removed for simpler, more robust centering --- */}
        <img src={sahayLogoDark} alt="SAHAY Logo" style={styles.logo} />
        <h2 style={styles.sahayText}>SAHAY</h2>

        <h1 style={styles.title}>Welcome Back</h1>

        <form onSubmit={handleFormSubmit}>
          <input type="email" placeholder="Email Address" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <button type="submit" style={styles.submitButton}>Sign In</button>
        </form>

        <p style={styles.switchLink} onClick={onSwitchToSignUp}>
          Don't have an account? <a style={styles.linkAnchor}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;