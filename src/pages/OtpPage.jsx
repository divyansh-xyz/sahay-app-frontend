import React from 'react';

// --- FIX: Using the Vite-recommended URL constructor for reliable image pathing ---
const sahayLogoDark = new URL('../assets/sahay-logo-dark.png', import.meta.url).href;

const OtpPage = ({ isDarkMode, onSuccessfulVerification }) => {
  const styles = {
    // --- All style changes mirror the other auth pages for centering ---
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
    title: { color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.8em' },
    subtitle: { marginBottom: '30px', color: 'var(--text-color)', opacity: 0.8 },
    input: { width: 'calc(100% - 22px)', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid var(--input-border-color)', fontFamily: "'Times New Roman', Times, serif", fontSize: '1.2em', textAlign: 'center', letterSpacing: '0.2em' },
    submitButton: { width: '100%', padding: '12px', backgroundColor: 'var(--accent-color)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1em', marginTop: '10px' },
    resendLink: { marginTop: '20px', fontSize: '0.9em' },
    linkAnchor: { color: 'var(--accent-color)', textDecoration: 'underline' }
  };

  const handleFormSubmit = (e) => { 
    e.preventDefault(); 
    onSuccessfulVerification(); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* --- The wrapping div has been removed for simpler centering --- */}
        <img src={sahayLogoDark} alt="SAHAY Logo" style={styles.logo} />
        <h2 style={styles.sahayText}>SAHAY</h2>

        <h1 style={styles.title}>Verification</h1>
        <p style={styles.subtitle}>Enter the OTP sent to your mobile number.</p>

        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="- - - - - -" style={styles.input} maxLength="6" required />
          <button type="submit" style={styles.submitButton}>Verify & Sign Up</button>
        </form>

        <p style={styles.resendLink}>Didn't receive the code? <a style={styles.linkAnchor}>Resend OTP</a></p>
      </div>
    </div>
  );
};

export default OtpPage;