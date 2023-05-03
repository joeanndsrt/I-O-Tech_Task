import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditClient from '../components/EditClient';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import AddClient from '../components/AddClient';
import clientsService from '../services/clientsService'


const ClientsEdit = () => {
  const [clients, setClients] = useState(useLocation().state.clients);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onClientUpdate = async (updatedClient) => {
    try {
        await clientsService.updateClientById(updatedClient.id, updatedClient);
        const updatedClients = clients.map((c) => (c.id === updatedClient.id ? updatedClient : c));
        setClients(updatedClients);
    } catch (error) {
        console.error(error);
    }
  };

  const onClientDelete = async (id) =>{
    try {
        await clientsService.deleteClientById(id);
        const updatedClients = clients.filter(c => c.id !== id);
        setClients(updatedClients);
    } catch (error) {
        console.error(error);
    }
  }

  const addNewClient = async (newClient) => {
    try {
      const addedClient = await clientsService.addClient(newClient);
      setClients([...clients, addedClient]);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <>
      <h1>Edit Clients' List</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', margin: 'auto' }}>
        <Button
          variant="contained"
          className='mb-4'
          onClick={() => navigate('/clients')}
          sx={{ backgroundColor: "#020e62", width: "60px", height: "40px", color: "#fff" }}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </Button>
        <Button
          variant="contained"
          className='mb-4'
          onClick={handleClickOpen}
          sx={{ backgroundColor: "#020e62", width: "60px", height: "40px", color: "#fff" }}
        >
          <i className="fa-solid fa-plus"></i>
        </Button>
      </div>
      <TableContainer style={{ width: '80%', margin: 'auto', borderRadius: '10px' }}>
        <Table style={{ maxWidth: '100%' }}>
          <TableHead className='table-head'>
            <TableRow>
              <TableCell style={{ color: '#fff' }}>Name</TableCell>
              <TableCell style={{ color: '#fff' }}>Phone Number</TableCell>
              <TableCell style={{ color: '#fff' }}>Address</TableCell>
              <TableCell style={{ color: '#fff' }}>Subscription Type</TableCell>
              <TableCell align="center" style={{ color: '#fff' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients && clients.map((c) => (
              c.id && // check if the id is not null or undefined
              <EditClient key={c.id} clients={c} onClientUpdate={onClientUpdate} onClientDelete={() => onClientDelete(c.id)} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddClient open={open} handleClose={() => setOpen(false)} addNewClient={addNewClient} />
    </>
  )
  
}

export default ClientsEdit
