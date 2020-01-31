import React, { Suspense, useState, useTransition } from 'react';
import { fetchUppercaseText } from './fakeApi';
import UppercaseDisplay from './uppercase-display';

const TRANSITION_CONFIG = {
  timeoutMs: 1000 // Play with this number for a bit 👨‍💻
};

function App() {
  const [textResource, setTextResource] = useState(null);
  const [startTransition, isPending] = useTransition(TRANSITION_CONFIG);

  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target.elements.textInput.value;
    startTransition(() => {
      setTextResource(fetchUppercaseText(text))
    });
  };

  return (
    <div>
      <h1>Uppercase Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">lowercase: </label>
        <input id="textInput"/>
        <button
          disabled={isPending}
          type="submit"
        >
          TO THE UPPERCASE!
        </button>
      </form>
      <Suspense fallback={<p>Processing ...</p>}>
        <UppercaseDisplay textResource={textResource} isPending={isPending} />
      </Suspense>
    </div>
  );
}

export default App;
