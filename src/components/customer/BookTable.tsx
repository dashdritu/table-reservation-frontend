import { useState } from 'react';
import { Form, DatePicker, Input, Select, Button, message } from 'antd';
import { bookTable } from '../services/Api'; // Assuming you have an API function for booking a table

const { Option } = Select;

const BookTable = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      // Add logic to fetch restaurant details based on restaurantId (replace 'restaurantId' with actual value)
      const restaurantDetails = await fetchRestaurantDetails('restaurantId');

      // Add logic to validate and book the table
      const bookingResult = await bookTable({
        restaurantId: 'restaurantId', // Replace with actual restaurantId
        date: values.date.format('YYYY-MM-DD'),
        numberOfGuests: values.numberOfGuests,
        timeSlot: values.timeSlot,
        // Add other necessary data based on restaurantDetails
      });

    
      message.success(bookingResult.message);

      
      form.resetFields();
    } catch (error) {
      console.error('Error during table booking:', error);
     
      message.error('Table booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchRestaurantDetails = async (restaurantId) => {
    // Add logic to fetch restaurant details from the backend (replace with actual API call)
    const response = await fetch(`/api/restaurants/${restaurantId}`);
    const data = await response.json();
    return data;
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select a date!' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="numberOfGuests"
        label="Number of Guests"
        rules={[
          { required: true, message: 'Please enter the number of guests!' },
          { type: 'number', min: 1, max: 20, message: 'Number of guests must be between 1 and 20!' },
        ]}
      >
        <Input type="number" min={1} max={20} />
      </Form.Item>
      <Form.Item name="timeSlot" label="Time Slot" rules={[{ required: true, message: 'Please select a time slot!' }]}>
        <Select>
          {/* Populate time slots dynamically based on restaurant data */}
          {/* Example: */}
          <Option value="12:00 PM">12:00 PM</Option>
          <Option value="1:00 PM">1:00 PM</Option>
          {/* ... */}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Book Table
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookTable;
