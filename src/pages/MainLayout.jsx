import React, { useState } from 'react';

// --- FIX: Using absolute paths from the project's 'src' root for reliability ---
import Header from '/src/components/Header.jsx';
import SurveyPopup from '/src/components/SurveyPopup.jsx';
import HelplinesModal from '/src/components/HelplinesModal.jsx';
import Footer from '/src/components/Footer.jsx';
import HomePage from '/src/pages/HomePage.jsx';
import LibraryPage from '/src/pages/LibraryPage.jsx';
import ProfilePage from '/src/pages/ProfilePage.jsx';
import QuestionnairePage from '/src/pages/QuestionnairePage.jsx';

const MainLayout = ({ isDarkMode }) => {
  // Default page is now 'dashboard' to match the new header
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showSurveyPopup, setShowSurveyPopup] = useState(true);
  const [showHelplinesModal, setShowHelplinesModal] = useState(false);
  const [hasTakenSurvey, setHasTakenSurvey] = useState(false); // This can be used later

  // --- Event Handlers ---
  const handleNavClick = (page) => setCurrentPage(page);
  const handleAcceptSurvey = () => { setShowSurveyPopup(false); setCurrentPage('questionnaire'); };
  const handleDeclineSurvey = () => setShowSurveyPopup(false);
  
  // This function is now passed to HomePage for the "Start Wellness Assessment" button
  const handleStartAssessment = () => {
    setCurrentPage('questionnaire');
  }

  // This function is for when the questionnaire is eventually completed
  const handleSurveyComplete = () => { 
    setHasTakenSurvey(true); 
    setCurrentPage('dashboard'); // Go back to the dashboard after the survey
  };

  const styles = {
    mainContainer: { 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    },
    contentArea: { 
      flex: 1, 
      paddingTop: '65px' // Provides space for the fixed header
    },
  };

  // This function renders the correct page based on the current state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard': 
        return <HomePage onStartAssessment={handleStartAssessment} />;
      case 'library': 
        return <LibraryPage />;
      case 'progress': 
        return <ProfilePage isDarkMode={isDarkMode} />;
      case 'questionnaire': 
        return <QuestionnairePage onComplete={handleSurveyComplete} />;
      default: 
        return <HomePage onStartAssessment={handleStartAssessment} />;
    }
  };

  return (
    <div style={styles.mainContainer}>
      {showSurveyPopup && <SurveyPopup onAccept={handleAcceptSurvey} onDecline={handleDeclineSurvey} isDarkMode={isDarkMode} />}
      {showHelplinesModal && <HelplinesModal onClose={() => setShowHelplinesModal(false)} />}
      
      <Header 
        onNavClick={handleNavClick} 
        onHelplinesClick={() => setShowHelplinesModal(true)}
        activePage={currentPage}
        isDarkMode={isDarkMode}
      />

      {/* The old HappinessMeter component is now completely removed */}

      <main style={styles.contentArea}>
        {renderCurrentPage()}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;