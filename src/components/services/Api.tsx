
const BASE_URL = 'http://localhost:5000/api'; // replace the placeholder URLs (http://localhost:5000/api/signup, etc.) with the actual URLs of your backend API endpoints

const Api = {
  // User Management
  signUp: async (userData) => {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  },

  login: async (credentials) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
  },

  // Customer Operations
  getMyBookings: async (userId) => {
    const response = await fetch(`${BASE_URL}/my-bookings/${userId}`);
    const data = await response.json();
    return data;
  },

  cancelBooking: async (bookingId) => {
    const response = await fetch(`${BASE_URL}/cancel-booking/${bookingId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },

  getAllRestaurants: async (city) => {
    const response = await fetch(`${BASE_URL}/all-restaurants/${city}`);
    const data = await response.json();
    return data;
  },

  bookTable: async (bookingData) => {
    const response = await fetch(`${BASE_URL}/book-table`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();
    return data;
  },
};

export default Api;
