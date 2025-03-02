import react, { useState } from 'react';

export default function ThemeSwitcher() {
    const themeContext = react.createContext('light');
    const [theme, setTheme] = useState('light');

    return (
        <div>
            <button className="btn-switch">Dark</button>
            <button className="btn-switch">Light</button>
        </div>
    );
}
