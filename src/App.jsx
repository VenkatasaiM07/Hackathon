import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
  const {
    transcript,
    listening,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎤 Mic Test</h1>
      <p>Mic status: {listening ? 'ON ✅' : 'OFF ❌'}</p>

      <button
        onClick={() => startListening({ continuous: true, language: 'en-IN' })}
        style={{ marginRight: '10px', padding: '10px', background: 'green', color: 'white' }}
      >
        Start
      </button>
      <button
        onClick={stopListening}
        style={{ padding: '10px', background: 'red', color: 'white' }}
      >
        Stop
      </button>

      <h3>Transcript:</h3>
      <div style={{ background: '#f0f0f0', padding: '10px', marginTop: '10px' }}>
        {transcript || 'Speak something...'}
      </div>
    </div>
  );
}

export default App;
