import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleBlogPage.scss';

export default function SingleBlogPage() {
    const params = useParams();
    const [blogData, setBlogData] = useState({});

    function getBlogData() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res) => res.json())
            .then((res) => setBlogData(res))
            .catch((err) => console.error(err));
        console.log(params);
    }

    useEffect(getBlogData, []);

    return (
        <div className="page-wrapper">
            <div className="single-blog-card">
                <h2 className="single-blog-title">{blogData.title}</h2>
                <p className="single-blog-text">{blogData.body}</p>
            </div>
        </div>
    );
}
