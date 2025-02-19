import SearchInput from './SearchInput';
import Grid from './Grid';
import Button from './Button';

export default function Home() {
    // Use brackets if you want more lines. Not able to return more than one root element, you have to wrap them with something
    return (
        <div className="container">
            <SearchInput />
            <Button title="Click me" />
            <Grid />
        </div>
    );
}
