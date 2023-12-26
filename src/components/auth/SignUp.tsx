import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Spin, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { signUpApi } from '../services/api'; 

const SignUp = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const response = await SignUp(values);

      message.success(response.message);
 
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error appropriately, show error message
      message.error('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <Spin spinning={loading}>
      <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
        <h2>Sign Up</h2>
        <Form
          form={form}
          name="signupForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: 'Please enter your full name!' }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please enter your phone number!' },
              { len: 10, message: 'Phone number must be 10 digits!' },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a style={{ float: 'right' }} href="/login">
              Already have an account? Login
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Spin>
  );
};

export default SignUp;
