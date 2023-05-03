import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import clientsService from '../services/clientsService';
import { Button, Grid } from '@mui/material';
import Client from '../components/Client';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await clientsService.getClients();
      setClients(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container" style={{ height: "100vh" }}>
      <h1>Clients Details</h1>
      <div className="button-container mt-2">
        <Button 
          variant="contained" 
          onClick={() => navigate('/clients/edit', { state: { clients }})}
          sx={{ backgroundColor: "#020e62", width: "60px", height: "40px", color: "#fff" }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Button>
      </div>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <Grid container rowSpacing={8} columnSpacing={6} sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Client clients={clients}/>
        </Grid>
      )}
    </div>
  )
}

export default Clients;
