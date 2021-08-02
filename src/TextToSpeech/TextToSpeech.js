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
      <button onClick={() => speak({ text: value })}>Talky</button>
    </div>
  )
}

export default TextToSpeech;