import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import OtpPage from './pages/OtpPage.jsx';
import MainLayout from './pages/MainLayout.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [quote, setQuote] = useState("Your presence is your power.");
  
  // This state determines if the user sees the auth flow or the main app
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // These states manage which auth page is visible (signup, signin, or otp)
  const [authPage, setAuthPage] = useState('signup'); 
  const [showOtp, setShowOtp] = useState(false);

  // This function is called from SignInPage or OtpPage to log the user in
  const handleLogin = () => {
    console.log("User has been logged in.");
    setIsLoggedIn(true);
  };
  
  // Effect for splash screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Effect to toggle dark mode theme on the body
  useEffect(() => { 
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light'); 
  }, [isDarkMode]);

  // --- Navigation and Theme Toggle Functions ---
  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);
  const handleContinueToOtp = () => setShowOtp(true);
  const switchToSignUp = () => { 
    setShowOtp(false); 
    setAuthPage('signup'); 
  };
  const switchToSignIn = () => { 
    setShowOtp(false); 
    setAuthPage('signin'); 
  };

  const toggleStyle = {
      position: 'fixed', top: '20px', right: '20px', padding: '8px 16px', cursor: 'pointer', 
      backgroundColor: 'var(--primary-color)', color: '#fff', border: 'none', 
      borderRadius: '20px', zIndex: 1000,
  };

  if (loading) return <SplashScreen />;

  return (
    <div className="App">
      <button onClick={toggleDarkMode} style={toggleStyle}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Conditional rendering based on login state */}
      {isLoggedIn ? (
        <MainLayout isDarkMode={isDarkMode} />
      ) : (
        <>
          {showOtp ? (
            <OtpPage isDarkMode={isDarkMode} onSuccessfulVerification={handleLogin} />
          ) : authPage === 'signin' ? (
            <SignInPage isDarkMode={isDarkMode} onSwitchToSignUp={switchToSignUp} onSuccessfulLogin={handleLogin} />
          ) : (
            <SignUpPage 
              isDarkMode={isDarkMode} 
              quote={quote} 
              onContinue={handleContinueToOtp}
              onSwitchToSignIn={switchToSignIn} 
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;

