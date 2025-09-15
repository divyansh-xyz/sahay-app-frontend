import React from 'react';

// This component receives the function to start the questionnaire from MainLayout
const HomePage = ({ onStartAssessment }) => {
  const styles = {
    // --- Section 1: Hero Banner with Video ---
    heroContainer: {
      position: 'relative', // Anchor for the video and text overlay
      height: '50vh', // Takes up half the viewport height
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden', // Prevents video from spilling out
      borderRadius: '20px',
      marginBottom: '40px',
    },
    videoBackground: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      zIndex: 1, // Sits behind the text
      filter: 'brightness(0.7)', // Slightly darkens the video for text readability
    },
    heroContent: {
      position: 'relative',
      zIndex: 2, // Sits on top of the video
      textAlign: 'center',
      color: 'white',
      textShadow: '0 2px 8px rgba(0,0,0,0.7)',
    },
    heroTitle: {
      fontSize: '3.5em',
      fontWeight: 'bold',
      margin: '0 0 10px 0',
      fontFamily: "'Nunito', sans-serif",
      // --- The "Hollow Text" Effect ---
      // This makes the video show through the text
      backgroundColor: 'white',
      color: 'black',
      mixBlendMode: 'screen',
    },
    heroTagline: {
      fontSize: '1.2em',
      margin: '0 0 30px 0',
      fontFamily: "'Poppins', sans-serif",
    },
    assessmentButton: {
      backgroundColor: 'var(--accent-color)',
      color: 'var(--background-color)',
      border: 'none',
      borderRadius: '30px',
      padding: '12px 25px',
      fontSize: '1em',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },

    // --- Section 2: Info Cards ---
    cardsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      gap: '20px',
      marginBottom: '40px',
    },
    card: {
      backgroundColor: 'var(--card-bg-color)',
      padding: '25px',
      borderRadius: '15px',
      boxShadow: 'var(--card-shadow)',
      textAlign: 'center',
      flex: 1,
    },
    cardNumber: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      color: 'var(--primary-color)',
      margin: '0 0 10px 0',
    },
    cardText: {
      margin: 0,
      color: 'var(--text-color)',
      opacity: 0.8,
    },

    // --- Section 3: AI Wellness Assistant ---
    assistantContainer: {
      backgroundColor: 'var(--card-bg-color)',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: 'var(--card-shadow)',
    },
    assistantHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '10px',
    },
    assistantTitle: {
      margin: 0,
      fontSize: '1.5em',
      color: 'var(--primary-color)',
    },
    assistantSubtitle: {
      margin: '0 0 20px 0',
      opacity: 0.8,
    },
    chatInputContainer: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    },
    chatInput: {
      width: '100%',
      padding: '12px 50px 12px 15px',
      borderRadius: '30px',
      border: `1px solid var(--input-border-color)`,
      backgroundColor: 'var(--background-color)',
      color: 'var(--text-color)',
      fontSize: '1em',
    },
    sendButton: {
      position: 'absolute',
      right: '5px',
      backgroundColor: 'var(--primary-color)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  
  const handleButtonHover = (e, isHovering) => {
    e.currentTarget.style.transform = isHovering ? 'scale(1.05)' : 'scale(1)';
    e.currentTarget.style.boxShadow = isHovering ? '0 6px 20px rgba(0,0,0,0.3)' : '0 4px 15px rgba(0,0,0,0.2)';
  }

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <div style={styles.heroContainer}>
        <video 
          style={styles.videoBackground} 
          src="/video.mp4" // Directly references the video in your 'public' folder
          autoPlay 
          loop 
          muted 
        />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Sahay</h1>
          <p style={styles.heroTagline}>Your mental wellness companion for a healthier, happier you</p>
          <button 
            style={styles.assessmentButton}
            onClick={onStartAssessment} // Connects to the function from MainLayout
            onMouseOver={(e) => handleButtonHover(e, true)}
            onMouseOut={(e) => handleButtonHover(e, false)}
          >
            Start Wellness Assessment
          </button>
        </div>
      </div>

      {/* --- INFO CARDS SECTION --- */}
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardNumber}>15+</h2>
          <p style={styles.cardText}>Wellness Questions</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardNumber}>24/7</h2>
          <p style={styles.cardText}>Support Available</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardNumber}>100%</h2>
          <p style={styles.cardText}>Confidential</p>
        </div>
      </div>

      {/* --- AI WELLNESS ASSISTANT SECTION --- */}
      <div style={styles.assistantContainer}>
        <div style={styles.assistantHeader}>
          <h2 style={styles.assistantTitle}>AI Wellness Assistant</h2>
        </div>
        <p style={styles.assistantSubtitle}>Start a conversation with our AI assistant for immediate support and guidance.</p>
        <div style={styles.chatInputContainer}>
          <input type="text" style={styles.chatInput} placeholder="Share what's on your mind..." />
          <button style={styles.sendButton} title="Send">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;