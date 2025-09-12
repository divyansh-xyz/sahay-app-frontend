import React from 'react';
// This path goes up one level from the 'pages' folder to the 'src' folder,
// and then into the 'assets' folder. Please ensure this matches your structure.
import sahayLogoLight from '../assets/sahay-logo-light.png';
import sahayLogoDark from '../assets/sahay-logo-dark.png';

const SignInPage = ({ isDarkMode, onSwitchToSignUp, onSuccessfulLogin }) => {
  const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', },
    card: { padding: '40px', borderRadius: '12px', backgroundColor: 'var(--card-bg-color)', boxShadow: 'var(--card-shadow)', width: '100%', maxWidth: '450px', textAlign: 'center', },
    logo: { width: '100px', },
    sahayText: { color: '#FFFFFF', fontSize: '1.6em', letterSpacing: '0.4em', margin: '10px 0 20px 0', fontWeight: 'normal', fontFamily: "'Times New Roman', Times, serif", },
    title: { color: 'var(--primary-color)', marginBottom: '30px', fontFamily: "'Times New Roman', Times, serif", fontSize: '24pt' },
    input: { width: 'calc(100% - 22px)', padding: '12px', marginBottom: '20px', borderRadius: '5px', border: '1px solid var(--input-border-color)', fontFamily: "'Times New Roman', Times, serif", fontSize: '12pt', backgroundColor: 'transparent', color: 'var(--text-color)', },
    submitButton: { width: '100%', padding: '12px', backgroundColor: 'var(--accent-color)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1em', marginTop: '10px', fontFamily: "'Times New Roman', Times, serif" },
    switchLink: { marginTop: '20px', color: 'var(--text-color)', cursor: 'pointer', fontFamily: "'Times New Roman', Times, serif", fontSize: '12pt' },
    linkAnchor: { color: 'var(--accent-color)', textDecoration: 'underline' }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // This prop call triggers the login state change in App.js
    if (onSuccessfulLogin) {
      onSuccessfulLogin(); 
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={isDarkMode ? sahayLogoDark : sahayLogoLight} alt="SAHAY Logo" style={styles.logo} />
        {isDarkMode ? (<h2 style={styles.sahayText}>SAHAY</h2>) : (<div style={{ height: '53.6px', marginBottom: '20px' }}></div>)}
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

