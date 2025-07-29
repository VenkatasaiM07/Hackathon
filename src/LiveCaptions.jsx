import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function LiveCaptions() {
  const {
    transcript,
    listening,
    resetTranscript,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Check if browser supports it
  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  // Handle mic start
  const handleStart = () => {
    resetTranscript(); // clear previous
    startListening({ continuous: true, language: 'en-IN' }); // Indian English
    console.log('🎙️ Started listening...');
  };

  // Handle mic stop
  const handleStop = () => {
    stopListening();
    console.log('🛑 Stopped listening.');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>🎤 Live Captions</h2>
      <p style={{ color: listening ? 'green' : 'gray', fontWeight: 'bold' }}>
        Mic is {listening ? 'On 🎙️' : 'Off 🔇'}
      </p>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={handleStart}
          style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginRight: '10px' }}
        >
          Start
        </button>
        <button
          onClick={handleStop}
          style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}
        >
          Stop
        </button>
      </div>
      <div style={{ background: '#f0f0f0', padding: '10px', minHeight: '100px', borderRadius: '5px' }}>
        {transcript || "Speak something..."}
      </div>
    </div>
  );
}

export default LiveCaptions;
