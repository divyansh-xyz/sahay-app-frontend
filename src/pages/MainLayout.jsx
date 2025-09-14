import React, { useState } from 'react';
// --- FIX: Corrected import paths to be absolute from the project root ---
import Header from '/src/components/Header.jsx';
import HappinessMeter from '/src/components/HappinessMeter.jsx';
import SurveyPopup from '/src/components/SurveyPopup.jsx';
import HelplinesModal from '/src/components/HelplinesModal.jsx';
import Footer from '/src/components/Footer.jsx';
import HomePage from '/src/pages/HomePage.jsx';
import LibraryPage from '/src/pages/LibraryPage.jsx';
import ProfilePage from '/src/pages/ProfilePage.jsx';
import QuestionnairePage from '/src/pages/QuestionnairePage.jsx';

const MainLayout = ({ isDarkMode }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSurveyPopup, setShowSurveyPopup] = useState(true);
  const [showHelplinesModal, setShowHelplinesModal] = useState(false);
  const [hasTakenSurvey, setHasTakenSurvey] = useState(false);

  const handleNavClick = (page) => setCurrentPage(page);
  const handleAcceptSurvey = () => { setShowSurveyPopup(false); setCurrentPage('questionnaire'); };
  const handleDeclineSurvey = () => setShowSurveyPopup(false);
  const handleTakeNewSurvey = () => setCurrentPage('questionnaire');
  const handleSurveyComplete = () => { setHasTakenSurvey(true); setCurrentPage('home'); };

  const styles = {
    mainContainer: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
    contentArea: { flex: 1, padding: '20px', paddingTop: '80px' },
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'library': return <LibraryPage />;
      case 'profile': return <ProfilePage />;
      case 'questionnaire': return <QuestionnairePage onComplete={handleSurveyComplete} />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={styles.mainContainer}>
      {showSurveyPopup && <SurveyPopup onAccept={handleAcceptSurvey} onDecline={handleDeclineSurvey} />}
      {showHelplinesModal && <HelplinesModal onClose={() => setShowHelplinesModal(false)} />}
      
      <Header 
        onNavClick={handleNavClick} 
        onHelplinesClick={() => setShowHelplinesModal(true)}
        activePage={currentPage} // --- ADD THIS PROP ---
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

