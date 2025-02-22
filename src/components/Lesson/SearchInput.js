import { useState } from 'react';

export default function SearchInput({ onChangeFunction, onSearchFunction }) {
    // movieName works as a variable, can read it but not override or change it. For that we use setMovieName
    const [localValue, setLocalValue] = useState('');

    function changeHandler(e) {
        setLocalValue(e.target.value);
        onChangeFunction(localValue);
    }

    return (
        <div>
            <div className="input-group mb-3">
                <div className="dynamicInput"></div>

                <input
                    onChange={changeHandler}
                    type="text"
                    className="form-control"
                    placeholder="TV Show name"
                />
                <button
                    onClick={() => onSearchFunction()}
                    className="btn btn-outline-secondary"
                    type="button">
                    Search
                </button>
            </div>
        </div>
    );
}

// Main criterias for good react components is that it should be reusable
// At the moment the structure looks like App -> Home -> Search input
// We need to restructure our code and create separate components.
