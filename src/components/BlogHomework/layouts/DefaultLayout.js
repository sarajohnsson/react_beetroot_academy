import { Outlet } from 'react-router-dom';
import BlogHeader from '../pages/BlogHeader';

export default function DefaultLayout() {
    return (
        <>
            <BlogHeader />
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}
