import React from 'react';

const HelplinesModal = ({ onClose }) => {
  const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 },
    modal: { backgroundColor: 'var(--card-bg-color)', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--input-border-color)', paddingBottom: '15px', marginBottom: '15px' },
    title: { margin: 0, color: 'var(--primary-color)', fontSize: '1.5em' },
    closeButton: { background: 'none', border: 'none', fontSize: '1.5em', cursor: 'pointer', color: 'var(--text-color)' },
    helplineItem: { marginBottom: '20px' },
    helplineName: { fontWeight: 'bold', color: 'var(--accent-color)' },
  };

  const helplines = [
    { name: 'Vandrevala Foundation', number: '9999666555', desc: 'Offers 24/7 crisis intervention and mental health support.' },
    { name: 'NIMHANS', number: '080-46110007', desc: 'National Institute of Mental Health and Neurosciences helpline.' },
    { name: 'iCall', number: '022-25521111', desc: 'Psychological support run by the Tata Institute of Social Sciences.' },
    { name: 'KIRAN', number: '1800-599-0019', desc: 'A 24/7 mental health rehabilitation helpline by the Ministry of Social Justice.' }
  ];

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <div style={styles.header}>
          <h2 style={styles.title}>National Mental Health Helplines</h2>
          <button style={styles.closeButton} onClick={onClose}>&times;</button>
        </div>
        <div>
          {helplines.map((line, index) => (
            <div key={index} style={styles.helplineItem}>
              <p style={styles.helplineName}>{line.name}: {line.number}</p>
              <p>{line.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelplinesModal;

