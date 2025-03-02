export default function Game() {
    return (
        <div>
            <p>React Hooks:</p>
            <ul>
                <li>
                    useState: const [ state, setsState] = useState('default
                    value')
                </li>
                <li>
                    useEffect:
                    <pre>
                        {/* useEffect(() =>
                        {' do something'}, []) */}
                    </pre>
                </li>
                <li>
                    useContext
                    {/* Initialization */}
                    const someContext = React.createContext('my-context')
                    {/* Value of data will be my-context */}
                    const someData = useContext(someContext)
                </li>
                <li>
                    useReducer const [state, setState] =
                    useReducer(reducerFunction, initialValue)
                </li>
                <li>
                    useCallback const someMemo = useCallback ((=> 'do
                    something', [dependencies]))
                </li>
                <li>useRef</li>
                <li>useLayout</li>
            </ul>
        </div>
    );
}
