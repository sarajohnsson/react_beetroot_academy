import { useEffect, useState } from 'react';

const words = [
    'flower',
    'rabbit',
    'search',
    'snake',
    'world',
    'excentric',
    'shirt',
];

export default function Game() {
    const [targetWord, setTargetWord] = useState('');

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        setTargetWord(words[getRandom(0, 6)]);
    }, []);
}
