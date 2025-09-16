import React, { useState } from 'react';

// --- Considerations for the Backend Developer ---
//
// 1.  **DATA SOURCE:**
//     - The `dummyLibraryData` array below is a placeholder.
//     - This entire array should be replaced with a single API call (e.g., using `useEffect`)
//       that fetches the user's library tracks from the database.
//     - The fetched data should be an array of objects with the same structure.
//     - You will need an `audioSrc` property in each object, containing the URL to the audio file.
//
// 2.  **PLAY FUNCTIONALITY:**
//     - The `handlePlayPause` function currently just logs to the console.
//     - This is the "hook" where you will implement the actual audio playing logic.
//     - You can use a library like 'howler.js' or a single HTML5 `<audio>` element at the
//       top of the component to manage playback.
//
// 3.  **FAVORITE FUNCTIONALITY:**
//     - The `handleToggleFavorite` function currently only updates the local state.
//     - This is the "hook" for making an API call to the backend to add or remove a track
//       from the user's list of favorites in the database.
//
// --- End of Backend Considerations ---


const dummyLibraryData = [
  { id: 1, category: 'Sleep', title: 'Ocean Waves', description: 'Gentle ocean sounds for deep sleep', duration: '30:00', isFavorited: false, audioSrc: '/audio/ocean.mp3' },
  { id: 2, category: 'Focus', title: 'Forest Rain', description: 'Peaceful rainfall in a quiet forest', duration: '45:00', isFavorited: true, audioSrc: '/audio/rain.mp3' },
  { id: 3, category: 'Mindfulness', title: 'Meditation Bell', description: 'Tibetan singing bowls for meditation', duration: '15:00', isFavorited: false, audioSrc: '/audio/bell.mp3' },
  { id: 4, category: 'Study', title: 'Study Flow', description: 'Ambient music to enhance concentration', duration: '60:00', isFavorited: false, audioSrc: '/audio/study.mp3' },
  { id: 5, category: 'Calm', title: 'Morning Birds', description: 'Birds chirping in a peaceful garden', duration: '25:00', isFavorited: false, audioSrc: '/audio/birds.mp3' },
  { id: 6, category: 'Focus', title: 'White Noise', description: 'Pure white noise for deep focus', duration: '120:00', isFavorited: false, audioSrc: '/audio/whitenoise.mp3' },
  { id: 7, category: 'Calm', title: 'Piano Relaxation', description: 'Soothing piano melodies to unwind', duration: '40:00', isFavorited: true, audioSrc: '/audio/piano.mp3' },
  { id: 8, category: 'Sleep', title: 'Night Sounds', description: 'Crickets and calm night ambiance', duration: '55:00', isFavorited: false, audioSrc: '/audio/night.mp3' },
];

const categoryColors = {
  Sleep: { background: '#4a5568', color: '#e2e8f0' },
  Focus: { background: '#2c5282', color: '#bee3f8' },
  Mindfulness: { background: '#805ad5', color: '#e9d8fd' },
  Study: { background: '#276749', color: '#c6f6d5' },
  Calm: { background: '#b7791f', color: '#feebc8' },
};


const LibraryPage = () => {
  const [libraryTracks, setLibraryTracks] = useState(dummyLibraryData);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handleToggleFavorite = (trackId) => {
    setLibraryTracks(prevTracks =>
      prevTracks.map(track =>
        track.id === trackId ? { ...track, isFavorited: !track.isFavorited } : track
      )
    );
    // TODO: Add API call here to update the user's favorites in the database.
    console.log(`Toggled favorite for track ID: ${trackId}`);
  };
  
  const handlePlayPause = (trackId) => {
    if (currentlyPlaying === trackId) {
      setCurrentlyPlaying(null); // Pause the track
      console.log(`Paused track ID: ${trackId}`);
      // TODO: Add logic here to pause the audio player.
    } else {
      setCurrentlyPlaying(trackId); // Play the new track
      console.log(`Playing track ID: ${trackId}`);
      // TODO: Add logic here to play the audio from track.audioSrc.
    }
  };

  const styles = {
    pageContainer: {
        padding: '20px',
        color: 'var(--text-color)',
    },
    title: {
        fontSize: '2.5em',
        color: 'var(--primary-color)',
        marginBottom: '30px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '25px',
    },
    card: {
      backgroundColor: 'var(--card-bg-color)',
      borderRadius: '15px',
      padding: '20px',
      boxShadow: 'var(--card-shadow)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '15px',
    },
    tag: {
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '10pt',
      fontWeight: 'bold',
    },
    heartButton: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '5px',
    },
    trackTitle: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '1.4em',
      margin: '0 0 5px 0',
      color: 'var(--primary-color)',
    },
    trackDescription: {
      fontSize: '11pt',
      opacity: 0.8,
      flexGrow: 1, // Pushes the footer down
      marginBottom: '20px',
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--input-border-color)',
      paddingTop: '15px',
    },
    duration: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '11pt',
    },
    playButton: {
      background: 'var(--primary-color)',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      padding: '8px 18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '11pt',
    },
  };

  return (
    <div style={styles.pageContainer}>
        <h1 style={styles.title}>Library</h1>
        <div style={styles.grid}>
        {libraryTracks.map(track => {
            const isPlaying = currentlyPlaying === track.id;
            const tagStyle = categoryColors[track.category] || { background: '#ccc', color: '#333' };
            
            return (
            <div 
                key={track.id} 
                style={styles.card}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                }}
            >
                <div style={styles.cardHeader}>
                    <span style={{...styles.tag, ...tagStyle}}>{track.category}</span>
                    <button style={styles.heartButton} onClick={() => handleToggleFavorite(track.id)} title="Favorite">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill={track.isFavorited ? 'var(--accent-color)' : 'none'} stroke={track.isFavorited ? 'var(--accent-color)' : 'var(--text-color)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>

                <h2 style={styles.trackTitle}>{track.title}</h2>
                <p style={styles.trackDescription}>{track.description}</p>

                <div style={styles.cardFooter}>
                    <span style={styles.duration}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10v3M6 7v9M10 4v15M14 7v9M18 10v3"/></svg>
                        {track.duration}
                    </span>
                    <button style={styles.playButton} onClick={() => handlePlayPause(track.id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isPlaying ? 
                                <path d="M6 4h4v16H6zM14 4h4v16h-4z"/> : 
                                <path d="M5 3l14 9-14 9V3z"/>
                            }
                        </svg>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
            </div>
            );
        })}
        </div>
    </div>
  );
};

export default LibraryPage;