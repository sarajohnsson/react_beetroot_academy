class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: 'dark' };
    }

    componentDidMount() {
        // I'll do something as soon as component is mounted
        console.log();
    }
    componentDidUpdate() {
        // I'll do something as soon as component is updated
    }

    componentWillUnmount() {
        // I'll do something before the user will leave the page
    }
}
