import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import OtpPage from './pages/OtpPage';
import MainLayout from './pages/MainLayout';
import ThemeToggle from './components/ThemeToggle'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [quote, setQuote] = useState("Your presence is your power.");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authPage, setAuthPage] = useState('signup'); 
  const [showOtp, setShowOtp] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  
  const fetchInspirationalQuote = async () => {
    // This is a placeholder for your actual Gemini API call
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    // fetchInspirationalQuote();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => { 
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light'); 
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);
  const handleContinueToOtp = () => setShowOtp(true);
  const switchToSignUp = () => { setShowOtp(false); setAuthPage('signup'); };
  const switchToSignIn = () => { setShowOtp(false); setAuthPage('signin'); };

  // The style object for the toggle has been moved into the ThemeToggle component.

  if (loading) {
    console.log("App: Loading SplashScreen");
    return <SplashScreen />;
  }

  console.log("App: Rendering main app, isLoggedIn:", isLoggedIn, "authPage:", authPage, "showOtp:", showOtp);

  return (
    <div className="App">
      {/* The old button is now replaced with our new, reusable component */}
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      {isLoggedIn ? (
        <MainLayout isDarkMode={isDarkMode} />
      ) : (
        <>
          {showOtp ? (
            console.log("App: Rendering OtpPage"),
            <OtpPage isDarkMode={isDarkMode} onSuccessfulVerification={handleLogin} />
          ) : authPage === 'signin' ? (
            console.log("App: Rendering SignInPage"),
            <SignInPage isDarkMode={isDarkMode} onSwitchToSignUp={switchToSignUp} onSuccessfulLogin={handleLogin} />
          ) : (
            console.log("App: Rendering SignUpPage"),
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

