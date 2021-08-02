import { useSpeechSynthesis } from 'react-speech-kit';
import { useState } from 'react';

const TextToSpeech = () => {
  const [value, setValue ] = useState('');
  const { speak } = useSpeechSynthesis();

  return(
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value, rate: 0.3, pitch: 0.5 })}>Talky</button>
    </div>
  )
}

export default TextToSpeech;