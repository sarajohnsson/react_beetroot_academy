import Button from '../../../TipsCalcHomework/Button';
import UseFetch from '../../../ClassCompHomework/UseFetch';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export default function BlogPage() {
    const { data, loading, error } = UseFetch(URL);
    console.log(data);

    if (loading) {
        return <h1>LOADING...</h1>;
    }

    if (error) {
        return <h1>{error.message}</h1>;
    }

    return (
        <div className="blog-container">
            <h1 className="title">Blog Post</h1>
            <div className="blog-card">
                {Array.isArray(data) &&
                    data.slice(0, 20).map((item) => (
                        <div className="blog-item" key={item.id}>
                            <h2 className="blog-title">{item.title}</h2>
                            <p className="blog-text">{item.body}</p>
                            <Button className="btn" title="See more" />
                        </div>
                    ))}
            </div>
        </div>
    );
}
