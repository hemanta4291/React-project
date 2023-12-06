
import axios from 'axios';

const baseURL = 'https://contact.mediusware.com/api/';

const axiosInstance = axios.create({
  baseURL,
});

export const fetchAllContacts = async () => {
  try {
    const response = await axiosInstance.get('contacts/');
    return response.data;
  } catch (error) {
    console.error('Error fetching all contacts:', error);
    throw error;
  }
};

export const fetchUsContacts = async () => {
  try {
    const response = await axiosInstance.get('/country-contacts/United%20States/');
    return response.data;
  } catch (error) {
    console.error('Error fetching US contacts:', error);
    throw error;
  }
};
