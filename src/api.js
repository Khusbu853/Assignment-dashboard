import axios from 'axios';

// when we write code we need to put API_URL and AUTH_TOKEN in .env file for security, for now i put it here.
const API_URL = 'https://enl-qa.centralindia.cloudapp.azure.com/assignment';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${AUTH_TOKEN}`,
  },
});

export const getMenuItems = async () => {
  try {
    const response = await api.get('/sidebarMenu/menuItems');
    return response;
  } catch (error) {
    console.error('Error fetching menu items:', error);
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get('/user/userInfo/allUsers');
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const getDashboardNumber = async () => {
  try {
    const response = await api.get('/dashboard/dashboardNumber');
    return response;
  } catch (error) {
    console.error('Error fetching dashboard number:', error);
  }
};

export const getUserDetails = async (id) => {
    try {
      const response = await api.get(`/user/userInfo/${id}`);
      return response;
    } catch (error) {
      console.error('Error fetching User details:', error);
    }
};

