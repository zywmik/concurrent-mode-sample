import React, { Suspense, useState, useTransition } from 'react';
import { fetchUppercaseText } from './fakeApi';
import UppercaseDisplay from './uppercase-display';
import './app.css';

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
        <input id="textInput" placeholder="from lowercase..."/>
        <button type="submit">
          ...TO THE UPPERCASE!
        </button>
      </form>
      <Suspense fallback={<div className="loader">Loading ...</div>}>
        <UppercaseDisplay
          textResource={textResource}
          isPending={isPending}
          className="uppercase-display"
        />
      </Suspense>
    </div>
  );
}

export default App;
