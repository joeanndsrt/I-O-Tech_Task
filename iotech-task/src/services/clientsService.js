import axios from 'axios';

const API_URL = 'https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients';

const clientsService = {
  //get all clients
  getClients: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  //add a new client
  addClient: async (clientData) => {
    const response = await axios.post(API_URL, clientData);
    return response.data;
  },

  //get a single client by ID
  getClientById: async (clientId) => {
    const response = await axios.get(`${API_URL}/${clientId}`);
    return response.data;
  },

  //update a single client by ID
  updateClientById: async (clientId, clientData) => {
    const response = await axios.put(`${API_URL}/${clientId}`, clientData);
    return response.data;
  },

  //delete a single client by ID
  deleteClientById: async (clientId) => {
    const response = await axios.delete(`${API_URL}/${clientId}`);
    return response.data;
  }
};

export default clientsService;
