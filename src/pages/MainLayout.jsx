import React, { useState } from 'react';

// Using correct relative paths for all imports
import Header from '../components/Header.jsx';
import HappinessMeter from '../components/HappinessMeter.jsx';
import SurveyPopup from '../components/SurveyPopup.jsx';
import HelplinesModal from '../components/HelplinesModal.jsx';
import Footer from '../components/Footer.jsx';
import HomePage from './HomePage.jsx';
import LibraryPage from './LibraryPage.jsx';
import ProfilePage from './ProfilePage.jsx';
import QuestionnairePage from './QuestionnairePage.jsx';

// This component receives the isDarkMode status from App.jsx
const MainLayout = ({ isDarkMode }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSurveyPopup, setShowSurveyPopup] = useState(true);
  const [showHelplinesModal, setShowHelplinesModal] = useState(false);
  const [hasTakenSurvey, setHasTakenSurvey] = useState(false);

  // --- Event Handlers ---
  const handleNavClick = (page) => setCurrentPage(page);
  const handleAcceptSurvey = () => { setShowSurveyPopup(false); setCurrentPage('questionnaire'); };
  const handleDeclineSurvey = () => setShowSurveyPopup(false);
  const handleTakeNewSurvey = () => setCurrentPage('questionnaire');
  const handleSurveyComplete = () => { setHasTakenSurvey(true); setCurrentPage('home'); };

  const styles = {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    contentArea: {
      flex: 1, // This allows the content to fill the space and push the footer down
      padding: '20px',
      // 80px of top padding prevents content from being hidden by the fixed header/meter
      paddingTop: '80px', 
    },
  };

  // This function decides which main page to render based on the current state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': 
        return <HomePage />;
      case 'library': 
        return <LibraryPage />;
      case 'profile': 
        // Passes the dark mode status down to the ProfilePage
        return <ProfilePage isDarkMode={isDarkMode} />;
      case 'questionnaire': 
        return <QuestionnairePage onComplete={handleSurveyComplete} />;
      default: 
        return <HomePage />;
    }
  };

  return (
    <div style={styles.mainContainer}>
      {/* Pop-ups and Modals */}
      {showSurveyPopup && <SurveyPopup 
        onAccept={handleAcceptSurvey} 
        onDecline={handleDeclineSurvey} 
        isDarkMode={isDarkMode} // Passes the dark mode status to the SurveyPopup
      />}
      {showHelplinesModal && <HelplinesModal onClose={() => setShowHelplinesModal(false)} />}
      
      {/* Main Persistent UI */}
      <Header 
        onNavClick={handleNavClick} 
        onHelplinesClick={() => setShowHelplinesModal(true)}
        activePage={currentPage}
        isDarkMode={isDarkMode} // Passes the dark mode status to the Header
      />
      <HappinessMeter hasTakenSurvey={hasTakenSurvey} onTakeNewSurvey={handleTakeNewSurvey} />

      <main style={styles.contentArea}>
        {renderCurrentPage()}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;