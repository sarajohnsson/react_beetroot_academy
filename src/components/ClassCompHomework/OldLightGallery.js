import React from 'react';
import LightGallery from 'lightgallery/react'; // Use the React wrapper
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgZoom from 'lightgallery/plugins/zoom';

const KEY = 'CMOi4Ecb-EvxU2Rxza6dr4uubqJTyRcKfjJlPvoQp7Y';
const URL = 'https://api.unsplash.com/photos';

export default class OldLightGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getImage();
    }

    getImage() {
        fetch(URL, { headers: { Authorization: `Client-ID ${KEY}` } })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('404');
                }
                return res.json();
            })
            .then((resp) => {
                this.setState({ data: resp });
            })
            .catch((error) => {
                this.setState({ error: error.message });
            });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="gallery-container">
                <LightGallery speed={500} plugins={[lgZoom]}>
                    {Array.isArray(data) &&
                        data.slice(0, 10).map((item) => (
                            <a key={item.id} href={item.urls.full}>
                                <img
                                    className="img-responsive"
                                    src={item.urls.thumb}
                                    alt={item.description || 'No description'}
                                />
                            </a>
                        ))}
                </LightGallery>
            </div>
        );
    }
}
