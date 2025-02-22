// import { useEffect, useRef } from 'react';
import LightGallery from 'lightgallery/react'; // Use the React wrapper
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgZoom from 'lightgallery/plugins/zoom';

import UseFetch from './UseFetch';

const KEY = 'CMOi4Ecb-EvxU2Rxza6dr4uubqJTyRcKfjJlPvoQp7Y';
const URL = 'https://api.unsplash.com/photos';

export default function Gallery() {
    const { data: photos, loading, error } = UseFetch(URL, KEY);
    if (loading) {
        return <h1>LOADING...</h1>;
    }

    if (error) {
        return <h1>{error.message}</h1>;
    }
    console.log(photos);

    return (
        <div className="gallery-container">
            <LightGallery speed={500} plugins={[lgZoom]}>
                {Array.isArray(photos) &&
                    photos.slice(0, 10).map((item) => (
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
