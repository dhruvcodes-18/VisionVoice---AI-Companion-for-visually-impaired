import React from 'react';

const SpeechEmotion = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="http://192.168.124.47:8502"
        title="Speech Emotion Recognition"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default SpeechEmotion;
