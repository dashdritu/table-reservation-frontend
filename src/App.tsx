import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/auth/SignUp'; import Login from components/auth从osin;
import Header from './components/common/Header';
import Spinner from './components/common/Spinner';
import AllRestaurants from ./components/customer/AllRestaurants'; import BookTable from components/customer/BookTable';
import Dashboard from './components/customer/Dashboard';
import MyBookings from components/customer/MyBookings;
import ReservationRequests from /components/manager/ReservationRequests';
import RegisterRestaurant from /components/manager/RegisterRestaurant;
import Api from './components/services/Api';
import './styles/index.css';

function App(){
const [isLoggedIn, setLoggedIn] = useState(false);

const handleLogout =()=>{
setLoggedIn(false);
};


return(
<Router>
<div>
<Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
<Switch>
<Route path="/signup"><SignUp /></Route>
<Route path="/login"> <Login onLogin={()=>setLoggedIn(true)} /></Route>
 <Route path="/all-restaurants"><AllRestaurants /></Route>
<Route path="/book-table/:restaurantId"><BookTable /></Route>
<Route path="/dashboard"> <Dashboard /></Route>
<Route path="/my-bookings"><MyBookings /></Route> <Route path='/reservation-requests'><ReservationRequests /></Route>
<Route path="/register-restaurant"><RegisterRestaurant /></Route>
<Route path="/spinner"><Spinner /></Route>
<Route path="/api"><Api /></Route>

</Switch>
</div>
</Router>
);

}

export default App;
