import axios from 'axios';

const API_URL = 'https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes';

const classesService = {
  //get all classes
  getClasses: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  //add a new class
  addClass: async (classData) => {
    const response = await axios.post(API_URL, classData);
    return response.data;
  },

  //get a single class by ID
  getClassById: async (classId) => {
    const response = await axios.get(`${API_URL}/${classId}`);
    return response.data;
  },

  //update a single class by ID
  updateClassById: async (classId, classData) => {
    const response = await axios.put(`${API_URL}/${classId}`, classData);
    return response.data;
  },

  //delete a single class by ID
  deleteClassById: async (classId) => {
    const response = await axios.delete(`${API_URL}/${classId}`);
    return response.data;
  }
};

export default classesService;
