import {Link, useNavigate} from 'react-router-dom';
import { Layout, Menu } from 'antd';

const {Header: AntdHeader} = Layout;

const Header=({isLoggedIn,onLogout})=>{
    const navigate=useNavigate();
    const handleLogout =()=>{
        localStorage.removeItem('user');
        navigate('/login'); 
        onLogout();
};

return(
<AntdHeader>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
            <Link to="/">Home</Link>
        </Menu.Item>
        {isLoggedIn ?(
        <>
        <Menu. Item key="2">
            <Link to="/my-bookings">My Bookings</Link>
        </Menu.Item>
        <Menu. Item key="3">
           <Link to="/all-restaurants">All Restaurants</Link>
        </Menu.Item>
        < Menu. Item key="4">
           <Link to="/book-table">Book a Fable</Link>
        </Menu.Item>
        <Menu. Item key="5" onClick={handleLogout}>
           Logout
        </Menu.Item>
       </>
        ):(
            <>
            <Menu.Item key="6">
                <Link to="/signup">Sign Up</Link>
            </Menu.Item>
            <Menu.Item key="7">
                <Link to="/login">Login</Link>
            </Menu.Item>
            </>
)}
</Menu>
</AntdHeader>

);

};

export default Header;

