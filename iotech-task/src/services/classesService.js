// services/classesService.js

import axios from 'axios';

const classesService = {
  getClasses: async () => {
    try {
      const response = await axios.get('https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getClassById: async (classId) => {
    try {
      const response = await axios.get(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${classId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  addClass: async (classData) => {
    try {
      const response = await axios.post('https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes', classData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  updateClass: async (classId, classData) => {
    try {
      const response = await axios.put(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${classId}`, classData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  deleteClass: async (classId) => {
    try {
      const response = await axios.delete(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${classId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};

export default classesService;
