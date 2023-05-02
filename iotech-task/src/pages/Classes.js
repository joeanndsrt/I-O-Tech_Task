import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import classesService from '../services/classesService';
import Class from '../components/Class'
import { Button, Grid } from '@mui/material';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await classesService.getClasses();
      setClasses(result);
    };
    fetchData();
  }, []);
  
  return (
    <div className="container">
      <h1>Classes Preview Page</h1>
      <Button variant="contained" className="m-4" onClick={() => navigate('/classes/edit', { state: { classes }})}>
        <i className="fa-solid fa-pen-to-square"></i>
      </Button>
      <Grid container rowSpacing={8} columnSpacing={10}>
          <Class classes={classes}/>
      </Grid>
    </div>
  );
};

export default Classes;
