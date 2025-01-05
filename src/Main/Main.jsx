
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet />
            <h2>Hello there</h2>
        </div>
    );
};

export default Main;