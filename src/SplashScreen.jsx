import React from 'react';

// --- FIX: Using a more reliable method to resolve the image path for modern bundlers like Vite ---
// This uses the module's own location to correctly find the relative asset path.
const sahayLogoLight = new URL('./assets/sahay-logo-light.png', import.meta.url).href;

const SplashScreen = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: 'var(--background-color)',
            animation: 'fadeOut 1s ease 2.5s forwards', // Fade out after 2.5s
            opacity: 1, // Start with full opacity
        },
        logo: {
            width: '150px',
            animation: 'fadeIn 1.5s ease-in-out'
        },
        tagline: {
            marginTop: '20px',
            fontSize: '1.2em',
            color: 'var(--primary-color)',
            animation: 'fadeIn 1.5s ease-in-out'
        },
    };

    const keyframes = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; visibility: hidden; }
        }
    `;

    return (
        <div>
            <style>{keyframes}</style>
            <div style={styles.container}>
                <img src={sahayLogoLight} alt="SAHAY Logo" style={styles.logo} />
                <p style={styles.tagline}>Lending a hand, uplifting a mind.</p>
            </div>
        </div>
    );
};

export default SplashScreen;

