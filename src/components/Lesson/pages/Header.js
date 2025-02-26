// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { theme: 'dark' };
//     }

//     componentDidMount() {
//         // I'll do something as soon as component is mounted
//         console.log();
//     }
//     componentDidUpdate() {
//         // I'll do something as soon as component is updated
//     }

//     componentWillUnmount() {
//         // I'll do something before the user will leave the page
//     }
// }

const pages = [
    {
        name: 'Home',
        url: '/home',
    },
    {
        name: 'Game',
        url: '/game',
    },
];

export default function Header({ setPage }) {
    function clickHandler(event) {
        event.preventDefault();
        setPage(event.target.textContent.toLowerCase());
    }

    return (
        <ul>
            {pages.map((page, index) => {
                return (
                    <li key={index}>
                        <a onClick={clickHandler} href={page.url}>
                            {page.name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
