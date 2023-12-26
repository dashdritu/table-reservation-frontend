
import  { useState } from 'react';
import { Table, Button, message } from 'antd';

const AllRestaurants = () => {
  const [tableData, setTableData] = useState([
    // Replace with actual restaurant data
    {
      restaurantId: 1,
      restaurantName: 'Sample Restaurant 1',
      registeredDate: '2023-01-01',
      cuisines: 'Italian, Japanese',
      location: '123 Main St, Cityville',
      numberOfBookings: 50,
    },
    {
      restaurantId: 2,
      restaurantName: 'Sample Restaurant 2',
      registeredDate: '2023-02-15',
      cuisines: 'Mexican, Indian',
      location: '456 Oak St, Townsville',
      numberOfBookings: 30,
    },
    // Add more restaurants as needed
  ]);

  const handleBookTable = (restaurantId) => {
    //  redirect the user to the Book Table screen or display a modal
    // For now,  display a success message
    const selectedRestaurant = tableData.find((restaurant) => restaurant.restaurantId === restaurantId);
    message.success(`Book table at ${selectedRestaurant.restaurantName} successfully!`);
  };

  const columns = [
    { title: 'Restaurant Name', dataIndex: 'restaurantName', key: 'restaurantName' },
    { title: 'Registered Date', dataIndex: 'registeredDate', key: 'registeredDate' },
    { title: 'Cuisines', dataIndex: 'cuisines', key: 'cuisines' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { title: 'Number of Bookings', dataIndex: 'numberOfBookings', key: 'numberOfBookings' },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleBookTable(record.restaurantId)}>
          Book Table
        </Button>
      ),
    },
  ];

  return <Table dataSource={tableData} columns={columns} />;
};

export default AllRestaurants;
