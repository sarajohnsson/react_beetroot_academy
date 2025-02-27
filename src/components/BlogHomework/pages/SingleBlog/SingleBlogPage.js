import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleBlogPage() {
    const params = useParams();
    function getBlogData() {
        console.log(params);
    }

    useEffect(getBlogData, []);

    return <p>Single Blog page</p>;
}
