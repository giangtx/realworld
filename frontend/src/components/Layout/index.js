import Header from "./Header";
import { Outlet } from 'react-router-dom';

const Layout = ({ isDark }) => {
    return (
        <div className={`page-content ${isDark ? 'dark': ''}`}>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;