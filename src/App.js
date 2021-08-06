import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import languages from './srv/languages';
import { detectLanguage, translateLanguage } from './api/translate';

const App = () => {
    const [text, setText] = useState('');
    const [detectedLanguage, setDetectedLanguage] = useState('');
    const [language, setLanguage] = useState('');
    const handleChange = async e => {
        e.preventDefault();
        setText(e.target.value);
        const dla = await detectLanguage(text);
        languages.forEach(lang => {
            if (dla === lang.code) {
                setDetectedLanguage(lang.name);
            }
        });
    };
    return (
        <div>
            <h1>Translation App</h1>
            <form>
                <textarea
                    placeholder="Insert text here!"
                    onChange={handleChange}
                />
                <div />
                Detected Language: {detectedLanguage}
                <div />
                Translate to:
                <div />
                <select
                    onChange={e => setLanguage(e.target.value)}
                    defaultValue="Choose Language"
                >
                    {languages.map(lang => {
                        return (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        );
                    })}
                </select>
                <div />
                <button type="submit">Translate</button>
            </form>
        </div>
    );
};

export default App;
