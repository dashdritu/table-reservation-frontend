
import  { useState } from 'react';
import { Tabs } from 'antd';
import MyBookings from './MyBookings';
import AllRestaurants from './AllRestaurants';

const { TabPane } = Tabs;

const Dashboard = () => {
  const [defaultTabKey, setDefaultTabKey] = useState('2');

  const handleTabChange = (key) => {
    setDefaultTabKey(key);
  };

  return (
    <Tabs defaultActiveKey={defaultTabKey} onChange={handleTabChange}>
      <TabPane tab="My Bookings" key="1">
        <MyBookings />
      </TabPane>
      <TabPane tab="All Restaurants" key="2">
        <AllRestaurants />
      </TabPane>
    </Tabs>
  );
};

export default Dashboard;
