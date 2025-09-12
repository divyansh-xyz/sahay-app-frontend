import React, { useState } from 'react';

// --- FIX: Using relative import paths ---
import Header from '../header.jsx';
import HappinessMeter from '../HappinessMeter.jsx';
import SurveyPopup from '../SurveyPopup.jsx';
import HelplinesModal from '../HelplinesModal.jsx';

import HomePage from './HomePage.jsx';
import LibraryPage from './LibraryPage.jsx';
import ProfilePage from './ProfilePage.jsx';
import QuestionnairePage from './QuestionnairePage.jsx';

const MainLayout = ({ isDarkMode }) => {
  // State to manage which main page is visible ('home', 'library', or 'profile')
  const [currentPage, setCurrentPage] = useState('home');
  // State for the initial survey pop-up
  const [showSurveyPopup, setShowSurveyPopup] = useState(true);
  // State for the helplines modal
  const [showHelplinesModal, setShowHelplinesModal] = useState(false);
  // Dummy state to track if the user has taken the survey
  const [hasTakenSurvey, setHasTakenSurvey] = useState(false);

  // --- Handlers for Navigation and Modals ---

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleAcceptSurvey = () => {
    setShowSurveyPopup(false);
    setCurrentPage('questionnaire'); // Switch to the questionnaire page
  };

  const handleDeclineSurvey = () => {
    setShowSurveyPopup(false); // Just close the pop-up
  };

  const handleTakeNewSurvey = () => {
      setCurrentPage('questionnaire');
  }

  // This function will be called when the questionnaire is completed in the future
  const handleSurveyComplete = () => {
      setHasTakenSurvey(true);
      setCurrentPage('home'); // Go back to the home page after survey
  }

  const styles = {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    contentArea: {
      flex: 1,
      padding: '20px',
      // The 80px top padding prevents content from hiding under the fixed header/meter
      paddingTop: '80px', 
    },
  };

  // --- Logic to Render the Correct Page ---
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'library':
        return <LibraryPage />;
      case 'profile':
        return <ProfilePage />;
      case 'questionnaire':
        // Pass the completion handler to the questionnaire page
        return <QuestionnairePage onComplete={handleSurveyComplete} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={styles.mainContainer}>
      {/* These pop-ups will appear on top of everything when active */}
      {showSurveyPopup && <SurveyPopup onAccept={handleAcceptSurvey} onDecline={handleDeclineSurvey} />}
      {showHelplinesModal && <HelplinesModal onClose={() => setShowHelplinesModal(false)} />}
      
      {/* Header and Happiness Meter are fixed at the top */}
      <Header onNavClick={handleNavClick} onHelplinesClick={() => setShowHelplinesModal(true)} />
      <HappinessMeter hasTakenSurvey={hasTakenSurvey} onTakeNewSurvey={handleTakeNewSurvey} />

      <main style={styles.contentArea}>
        {renderCurrentPage()}
      </main>
    </div>
  );
};

export default MainLayout;

