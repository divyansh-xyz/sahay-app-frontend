import React, { useState } from 'react';

const SharePage = () => {
  const [status, setStatus] = useState('idle');

  const handleSendRequest = () => {
    console.log("Sending chat request to backend...");
    setStatus('searching');
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 65px)',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    },
    contentWrapper: {
      maxWidth: '500px',
    },
    illustration: {
      width: '150px',
      height: '150px',
      marginBottom: '30px',
      color: 'var(--primary-color)',
    },
    title: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '2.5em',
      color: 'var(--primary-color)',
      margin: '0 0 15px 0',
    },
    subtitle: {
      fontSize: '1.1em',
      opacity: 0.8,
      lineHeight: '1.6',
      marginBottom: '30px',
    },
    requestButton: {
      backgroundColor: 'var(--accent-color)',
      color: 'var(--background-color)',
      border: 'none',
      borderRadius: '30px',
      padding: '15px 35px',
      fontSize: '1.1em',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    searchingContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pulsingAnimation: {
      width: '100px',
      height: '100px',
      position: 'relative',
      marginBottom: '30px',
    },
    pulseCircle: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'var(--primary-color)',
      opacity: 0.6,
      animation: 'pulse 2s infinite cubic-bezier(0.66, 0, 0, 1)',
    },
    pulseCircleDelay: {
      animationDelay: '1s',
    },
  };

  const keyframes = `
    @keyframes pulse {
      0% { transform: scale(0); opacity: 0.6; }
      100% { transform: scale(1); opacity: 0; }
    }
  `;

  return (
    <div style={styles.pageContainer}>
      <style>{keyframes}</style>
      <div style={styles.contentWrapper}>
        {status === 'idle' ? (
          <>
            <svg style={styles.illustration} viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
            <h1 style={styles.title}>Ready to talk?</h1>
            <p style={styles.subtitle}>Click below to connect with a student volunteer for a supportive conversation. It's confidential and you're not alone.</p>
            <button
              style={styles.requestButton}
              onClick={handleSendRequest}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Send Request
            </button>
          </>
        ) : (
          <div style={styles.searchingContainer}>
            <div style={styles.pulsingAnimation}>
              <div style={styles.pulseCircle}></div>
              <div style={{...styles.pulseCircle, ...styles.pulseCircleDelay}}></div>
            </div>
            <h2 style={styles.title}>Searching for available volunteers...</h2>
            <p style={styles.subtitle}>This should only take a moment. We're finding the right person for you to talk to.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePage;