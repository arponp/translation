import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import languages from './srv/languages';

const App = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(text, language);
    };
    return (
        <div>
            <h1>Translation App</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Insert text here!"
                    onChange={e => setText(e.target.value)}
                />
                <div />
                <select onChange={e => setLanguage(e.target.value)}>
                    <option selected>Select Language</option>
                    {languages.map(lang => {
                        return <option value={lang.code}>{lang.name}</option>;
                    })}
                </select>
                <div />
                <button type="submit">Translate</button>
            </form>
        </div>
    );
};

export default App;
