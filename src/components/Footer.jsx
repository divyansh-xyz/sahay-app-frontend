import React from 'react';
const sahayLogoLight = new URL('../assets/sahay-logo-light.png', import.meta.url).href;

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: '#336467', // Using the primary color for a dark, branded look
      color: '#e0ddae', // Light text for contrast
      padding: '40px 20px',
      fontFamily: "'Times New Roman', Times, serif",
      fontSize: '12pt',
    },
    footerContent: {
      display: 'flex',
      flexWrap: 'wrap', // Allows items to wrap on smaller screens
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerSection: {
      flex: 1, // Each section will take up equal space
      minWidth: '200px', // Prevents sections from getting too squished
      marginBottom: '20px',
      padding: '0 15px',
    },
    logoSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
      width: '80px',
      marginBottom: '10px',
    },
    tagline: {
        fontSize: '11pt',
        opacity: 0.8,
        margin: 0,
    },
    linksHeader: {
      fontWeight: 'bold',
      marginBottom: '15px',
      fontSize: '13pt',
    },
    linksList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: '10px',
    },
    link: {
      color: '#e0ddae',
      textDecoration: 'none',
      opacity: 0.8,
      transition: 'opacity 0.3s',
    },
    socials: {
        display: 'flex',
        gap: '15px',
        marginTop: '10px',
    },
    socialIcon: {
        width: '24px',
        height: '24px',
    },
    disclaimer: {
      textAlign: 'center',
      marginTop: '30px',
      paddingTop: '20px',
      borderTop: '1px solid rgba(224, 221, 174, 0.2)',
      fontSize: '10pt',
      opacity: 0.7,
      maxWidth: '800px',
      margin: '30px auto 0 auto',
    },
    copyright: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '10pt',
      opacity: 0.7,
    }
  };

  // Hover effect for links
  const handleMouseOver = (e) => e.target.style.opacity = '1';
  const handleMouseOut = (e) => e.target.style.opacity = '0.8';

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        
        {/* Section 1: Logo and Tagline */}
        <div style={{...styles.footerSection, ...styles.logoSection}}>
          <img src={sahayLogoLight} alt="Sahay Logo" style={styles.logo} />
          <p style={styles.tagline}>Lending a hand, uplifting a mind.</p>
        </div>

        {/* Section 2: Navigation Links */}
        <div style={styles.footerSection}>
          <h3 style={styles.linksHeader}>Navigate</h3>
          <ul style={styles.linksList}>
            <li style={styles.linkItem}><a href="#" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</a></li>
            <li style={styles.linkItem}><a href="#" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Library</a></li>
            <li style={styles.linkItem}><a href="#" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Profile</a></li>
          </ul>
        </div>

        {/* Section 3: Resources */}
        <div style={styles.footerSection}>
          <h3 style={styles.linksHeader}>Resources</h3>
          <ul style={styles.linksList}>
            <li style={styles.linkItem}><a href="#" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Helplines</a></li>
            <li style={styles.linkItem}><a href="#" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Volunteer</a></li>
            <li style={styles.linkItem}><a href="#" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About Us</a></li>
          </ul>
        </div>

        {/* Section 4: Social Media */}
        <div style={styles.footerSection}>
          <h3 style={styles.linksHeader}>Connect</h3>
          <div style={styles.socials}>
            {/* Simple inline SVGs for icons - no need for external libraries */}
            <a href="#" title="Facebook"><svg style={styles.socialIcon} fill="#e0ddae" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
            <a href="#" title="Twitter"><svg style={styles.socialIcon} fill="#e0ddae" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
            <a href="#" title="Instagram"><svg style={styles.socialIcon} fill="#e0ddae" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></a>
          </div>
        </div>

      </div>

      {/* Disclaimer Section */}
      <div style={styles.disclaimer}>
        <strong>Disclaimer:</strong> Sahay is a mental wellness support tool. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
      </div>
      
      {/* Copyright Section */}
      <div style={styles.copyright}>
        © 2025 Sahay. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

