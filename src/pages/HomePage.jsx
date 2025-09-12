import React from 'react';

const HomePage = () => {
    const handleSendMessage = (e) => {
        e.preventDefault();
        const message = e.target.elements.message.value;
        if (message) {
            console.log("Sending message to AI:", message);
            e.target.elements.message.value = '';
        }
    };
    
    const styles = {
        container: { display: 'flex', flexDirection: 'column', height: 'calc(100vh - 142px)', boxSizing: 'border-box' },
        chatWindow: { flex: 1, padding: '20px', overflowY: 'auto', borderBottom: '1px solid var(--input-border-color)' },
        messageContainer: { marginBottom: '15px' },
        aiMessage: { backgroundColor: 'var(--card-bg-color)', padding: '10px 15px', borderRadius: '15px 15px 15px 0', maxWidth: '70%', alignSelf: 'flex-start' },
        inputArea: { display: 'flex', padding: '20px' },
        textInput: { flex: 1, padding: '12px', borderRadius: '20px', border: '1px solid var(--input-border-color)', marginRight: '15px', fontSize: '1em' },
        sendButton: { padding: '12px 20px', borderRadius: '20px', border: 'none', backgroundColor: 'var(--primary-color)', color: 'white', cursor: 'pointer' },
    };

    return (
        <div style={styles.container}>
            <div style={styles.chatWindow}>
                <div style={styles.messageContainer}>
                    <p style={styles.aiMessage}>Hello! How are you feeling today? Feel free to share anything that's on your mind.</p>
                </div>
            </div>
            <form style={styles.inputArea} onSubmit={handleSendMessage}>
                <input name="message" type="text" placeholder="Type your message here..." style={styles.textInput} />
                <button type="submit" style={styles.sendButton}>Send</button>
            </form>
        </div>
    );
};

export default HomePage;

