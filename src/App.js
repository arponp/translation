import React, { useState } from 'react';
// import { detectLanguage, translateLanguage } from './api/translate';

export default function App() {
    const [textToTranslate, setTextToTranslate] = useState('');

    return (
        <div>
            <h1>Translate App</h1>
            <input
                type="text"
                placeholder="Enter translated text here"
                onChange={e => setTextToTranslate(e.target.value)}
            />
            <p>{textToTranslate}</p>
        </div>
    );
}
