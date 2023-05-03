import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import classesService from '../services/classesService';
import Class from '../components/Class'
import { Button, Grid } from '@mui/material';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await classesService.getClasses();
      setClasses(result);
      setLoading(false);
    };
    fetchData();
  }, []);
  
  return (
    <div className="container">
      <h1>Classes Preview Page</h1>
      <div className="button-container2 mt-2 mb-4">
        <Button 
          variant="contained" 
          onClick={() => navigate('/classes/edit', { state: { classes }})}
          sx={{ backgroundColor: "#020e62", width: "80px", height: "40px", color: "#fff" }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Button>
      </div>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <Grid container rowSpacing={8} columnSpacing={10}>
          <Class classes={classes}/>
      </Grid>
      )}
    </div>
  );
};

export default Classes;
