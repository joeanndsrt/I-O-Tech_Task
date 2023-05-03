import React from 'react'
import { Card, CardContent, CardMedia, Grid, Chip } from '@mui/material';

const Class = ({ classes }) => {

  //function to check if image in classes api has a valid image file
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }

  return (
    <>
      {classes && classes.map((c) => (
        c.id && // check if the id is not null or undefined
        <Grid item xs={4}>
          <Card  sx={{ maxWidth: 345, border: '1px solid #020e62' }} key={c.id}> 
          <CardMedia
            sx={{ height: 170 }}
            image={c.image ? (isValidUrl(c.image) ? c.image : 'https://via.placeholder.com/200x200.png?text=Image+Not+Available') : 'https://via.placeholder.com/200x200.png?text=Image+Not+Available'}
            title='Class Image'
          />
            <CardContent>
              <h2>{c.title}</h2>
              <h5>{c.description}</h5>
              <br/>
              <h6>Coach {c.coach_name}</h6>
              <p>{c.coach_brief}</p>
              <br/>
              <p>Timing: {c.timing}</p>
              <Chip label={'$ ' + c.price} sx={{ backgroundColor:'#020E62', color:'#fff'}}></Chip>
            </CardContent>
        </Card>
      </Grid>
      ))}
    </>
  )
}

export default Class;
