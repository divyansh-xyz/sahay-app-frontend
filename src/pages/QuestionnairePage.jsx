import React from 'react';

const QuestionnairePage = () => {
    const styles = {
        container: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 142px)', textAlign: 'center' },
        title: { color: 'var(--primary-color)', fontSize: '2em', }
    };
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>The questionnaire will be built here.</h1>
        </div>
    );
};

export default QuestionnairePage;

