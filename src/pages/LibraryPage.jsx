import React from 'react';

const LibraryPage = () => {
  const handleCardClick = (title) => {
    console.log(`Navigating to content for: ${title}`);
  };

  const libraryItems = [
    { title: 'Mind Focus Beats', icon: '🧠' }, { title: 'Relaxing Music', icon: '🎶' },
    { title: 'White Noise', icon: '💨' }, { title: 'Sleep Music', icon: '😴' },
    { title: 'Meditation', icon: '🧘' }, { title: 'Podcasts', icon: '🎙️' },
    { title: 'Breathing Exercises', icon: '😮‍💨' }, { title: 'Guided Journals', icon: '✍️' }
  ];

  const styles = {
    container: { padding: '30px', boxSizing: 'border-box' },
    title: { color: 'var(--primary-color)', marginBottom: '30px', textAlign: 'center', fontSize: '2em' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '25px' },
    card: { backgroundColor: 'var(--card-bg-color)', borderRadius: '12px', boxShadow: 'var(--card-shadow)', padding: '20px', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' },
    cardIcon: { fontSize: '3em', marginBottom: '15px' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Resource Library</h1>
      <div style={styles.grid}>
        {libraryItems.map(item => (
          <div key={item.title} style={styles.card} onClick={() => handleCardClick(item.title)} 
               onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
            <div style={styles.cardIcon}>{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;

