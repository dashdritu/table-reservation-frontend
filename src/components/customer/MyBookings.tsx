
import  { useState } from 'react';
import { Table, Button, Popconfirm, message, Tag } from 'antd';

const MyBookings = () => {
  const [tableData, setTableData] = useState([
    {
      bookingId: 1,
      restaurantName: 'Sample Restaurant 1',
      date: '2023-01-10',
      numberOfPeople: 4,
      bookingStatus: 'Pending',
      timeSlot: '7:00 PM',
      daysRemaining: 5,
    },
    {
      bookingId: 2,
      restaurantName: 'Sample Restaurant 2',
      date: '2023-01-15',
      numberOfPeople: 2,
      bookingStatus: 'Confirmed',
      timeSlot: '6:30 PM',
      daysRemaining: 10,
    },
    // Add more booking data as needed
  ]);

  const handleCancelBooking = (bookingId) => {
    // Placeholder logic, replace with actual cancel booking logic
    // For example, you can make an API call to cancel the booking
    const updatedData = tableData.map((booking) =>
      booking.bookingId === bookingId ? { ...booking, bookingStatus: 'Cancelled' } : booking
    );

    setTableData(updatedData);

    // Display a success message
    message.success('Booking canceled successfully!');
  };

  const columns = [
    { title: 'Restaurant Name', dataIndex: 'restaurantName', key: 'restaurantName' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Number of People', dataIndex: 'numberOfPeople', key: 'numberOfPeople' },
    {
      title: 'Booking Status',
      dataIndex: 'bookingStatus',
      key: 'bookingStatus',
      render: (status) => (
        <Tag color={status === 'Confirmed' ? 'green' : status === 'Rejected' ? 'red' : 'yellow'}>
          {status}
        </Tag>
      ),
    },
    { title: 'Time Slot', dataIndex: 'timeSlot', key: 'timeSlot' },
    { title: 'Days Remaining', dataIndex: 'daysRemaining', key: 'daysRemaining' },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) =>
        record.bookingStatus === 'Pending' ? (
          <Popconfirm
            title="Are you sure to cancel this booking?"
            onConfirm={() => handleCancelBooking(record.bookingId)}
          >
            <Button type="danger">Cancel Booking</Button>
          </Popconfirm>
        ) : null,
    },
  ];

  return <Table dataSource={tableData} columns={columns} />;
};

export default MyBookings;
